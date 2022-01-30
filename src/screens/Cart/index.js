import { useEffect, useState } from 'react'
import Container from '../../components/Container'
import Title from '../../components/Title'
import { getProductsCart } from '../../services/cart.service'

import CartList from './components/CartList'
const Cart = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState('')
  useEffect(() => {
    getProductsCart()
      .then((productsApi) => setProducts(productsApi.products))
      .catch((apiError) => setError('Ocurrio Algun Error', apiError))
  }, [])

  return (
    <Container>
      <Title>Cart</Title>
      <CartList products={products} />
      {error && <p>{error}</p>}
    </Container>
  )
}

export default Cart
