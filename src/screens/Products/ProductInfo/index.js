import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../../auth/authContext'
import Spinner from '../../../components/Spinner'
import { getProductById } from '../../../services/product.service'
import '../index.css'

const ProductInfo = () => {
  const { token } = useContext(AuthContext)

  const [product, setProduct] = useState({})
  const [stars, setStars] = useState([])
  const [error, setError] = useState('')

  const { productId } = useParams()
  const { image, price, title, description, rating } = product
  useEffect(() => {
    getProductById(productId)
      .then((apiProduct) => setProduct(apiProduct))
      .catch((apiError) => setError('Ocurrio Algun Error', apiError))
  }, [productId])

  useEffect(() => {
    let numberStars = []
    if (rating) {
      for (let i = 0; i < rating.rate; i++) {
        numberStars.push(i)
      }
      setStars(numberStars)
    }
  }, [rating])
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='product'>
      {product.title ? (
        <>
          <img src={image} alt={`${title}`} width={200} height={200} />
          <div className='container__product'>
            <h3>{title}</h3>
            <p className='description'>{description}</p>
            <p className='price'>
              {'$'}
              {price}
            </p>
            <div className='container-stars'>
              {stars.map((el) => (
                <i key={el} className='bi bi-star-fill star'></i>
              ))}
              <p className='rate'> {rating?.rate}</p>
            </div>
            <form className='add__car' onSubmit={handleSubmit}>
              <label htmlFor='amount'>Amount</label>
              <select id='amount'>
                <option value=''>--Select--</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
              </select>
              {token ? <input type='submit' value='Add to Card' /> : <p>Login to add to cart</p>}
            </form>
          </div>
          {error && <p>{error}</p>}
        </>
      ) : (
        <Spinner />
      )}
    </div>
  )
}

export default ProductInfo
