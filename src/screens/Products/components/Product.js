import { Link } from 'react-router-dom'
import '../index.css'
const Product = ({ product }) => {
  const { image, price, title, description, id } = product

  return (
    <div className='product'>
      <img src={image} alt={`${title}`} width={180} height={180} />
      <div className='container__product'>
        <h3>{title}</h3>
        <p className='description'>{description}</p>
        <p className='price'>
          {'$'}
          {price}
        </p>
        <Link to={`/products/${id}`} className='link'>
          View Product
        </Link>
      </div>
    </div>
  )
}

export default Product
