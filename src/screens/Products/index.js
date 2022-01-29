import { useState, useEffect } from 'react'
import ProductList from './components/ProductList'
import Title from '../../components/Title'
import { getAllProducts } from '../../services/product.service'
import Spinner from '../../components/Spinner'

const Products = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState('')
  useEffect(() => {
    getAllProducts()
      .then((apiProducts) => setProducts(apiProducts))
      .catch((apiError) => setError('Ocurrio Algun Error', apiError))
  }, [])

  return (
    <main className='container'>
      <Title>Our Products</Title>
      {products.length <= 0 ? <Spinner /> : <ProductList products={products} />}
      {error && <p>{error}</p>}
    </main>
  )
}

export default Products
