import { useEffect, useState } from 'react'
import Spinner from '../../../components/Spinner'
import { getProductById } from '../../../services/product.service'
import '../index.css'

const CartItem = ({ product }) => {
  const [productInfo, setProducInfo] = useState({})

  const { image, price, title } = productInfo
  useEffect(() => {
    if (product) {
      getProductById(product.productId)
        .then((apiProduct) => setProducInfo(apiProduct))
        .catch((err) => console.log(err))
    }
  }, [product])

  return (
    <>
      {!productInfo.title ? (
        <Spinner />
      ) : (
        <div className='product__info'>
          <img src={image} width={100} alt={title} />
          <div className='product__content'>
            <p className='title'>{title}</p>
            <p className='price'>
              {'$'}
              {price}
            </p>
            <p className='amount'>Quantity: {product.quantity}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default CartItem
