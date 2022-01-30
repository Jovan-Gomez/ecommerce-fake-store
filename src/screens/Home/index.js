import { useEffect, useState } from 'react'
import Container from '../../components/Container'
import ProductList from '../Products/components/ProductList'
import { getAllProducts } from '../../services/product.service'
import { Link } from 'react-router-dom'
import './index.css'
import Title from '../../components/Title'
import Spinner from '../../components/Spinner'
const Home = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState('')
  useEffect(() => {
    getAllProducts()
      .then((apiProducts) => setProducts(apiProducts.slice(0, 3)))
      .catch((apiError) => setError('Ocurrio Algun Error', apiError))
  }, [])
  return (
    <Container>
      <main className='container'>
        <Title>New Products</Title>
        {products.length <= 0 ? (
          <Spinner />
        ) : (
          <>
            <ProductList products={products} />
            {error && <p>{error}</p>}
            <div className='more'>
              <Link to='/products'>More products..</Link>
            </div>
          </>
        )}
      </main>
      <section className='container'>
        <Title>About</Title>
        <p className='about__short'>
          When I wanted to design a shopping website prototype and needed fake data, I had to use lorem ipsum data or
          create a JSON file from the base. I didn't find any online free web service to return semi-real shop data
          instead of lorem ipsum data. so I decided to create this simple web service with NodeJs(express) and MongoDB
          as a database.
        </p>
        <div className='more'>
          <Link to='/about'>Read more...</Link>
        </div>
      </section>
    </Container>
  )
}

export default Home
