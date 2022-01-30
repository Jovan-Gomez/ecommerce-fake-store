import CartItem from './CartItem'
import '../index.css'
import Title from '../../../components/Title'
import { useEffect, useState } from 'react'
import Loading from '../../../components/Loading'
const CartList = ({ products }) => {
  const [total, setTotal] = useState(798.04)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => setLoading(true)
  }, [])

  return (
    <div className='cart__container'>
      <div>
        {products.map((product) => (
          <CartItem key={product.productId} product={product} setTotal={setTotal} total={total} />
        ))}
      </div>

      <div className='check'>
        <Title>Check</Title>
        {loading ? (
          <Loading />
        ) : (
          <p className='cart__total'>
            {'$'}
            {total}
          </p>
        )}
        <button>Pay</button>
      </div>
    </div>
  )
}

export default CartList
