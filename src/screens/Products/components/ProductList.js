import Product from './Product'
import '../index.css'
const ProductList = ({ products }) => {
  return (
    <div className='container__products'>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
