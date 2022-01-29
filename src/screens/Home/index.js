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
        {products.length <= 0 ? <Spinner /> : <ProductList products={products} />}
        {error && <p>{error}</p>}
        <div className='more'>
          <Link to='/products'>View more..</Link>
        </div>
      </main>
    </Container>
  )
}

export default Home
