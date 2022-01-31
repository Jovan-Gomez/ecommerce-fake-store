import { useState, useEffect } from 'react'
import ProductList from './components/ProductList'
import Title from '../../components/Title'
import { getAllCategories, getAllProducts } from '../../services/product.service'
import Spinner from '../../components/Spinner'
import SearchBar from './components/SearchBar'

const Products = () => {
  const [products, setProducts] = useState([])
  const [productsSearch, setProductsSearch] = useState([])
  const [categories, setCategories] = useState([])
  const [word, setWord] = useState('')
  const [category, setCategory] = useState('')
  const [error, setError] = useState('')
  useEffect(() => {
    getAllProducts()
      .then((apiProducts) => {
        setProducts(apiProducts)
        setProductsSearch(apiProducts)
      })
      .catch((apiError) => setError('Ocurrio Algun Error', apiError))
  }, [])
  useEffect(() => {
    getAllCategories()
      .then((apiCategories) => setCategories(apiCategories))
      .catch((apiError) => setError('Ocurrio Algun Error', apiError))
  }, [])

  const handleInput = (e) => {
    setWord(e.target.value)
    filterProducts(e.target.value)
  }
  const handleSelect = (e) => {
    setCategory(e.target.value)
    filterProductsCategory(e.target.value)
  }
  const filterProducts = (word = '') => {
    const searchResult = productsSearch.filter((product) =>
      product.title.toString().toLowerCase().includes(word.toLowerCase())
    )
    setProducts(searchResult)
  }
  const filterProductsCategory = (category = '') => {
    if (category === '') {
      setProducts(productsSearch)
    } else {
      const searchResult = productsSearch.filter((product) => product.category === category)
      setProducts(searchResult)
    }
  }

  return (
    <main className='container'>
      <Title>Our Products</Title>
      <SearchBar
        categories={categories}
        word={word}
        category={category}
        handleInput={handleInput}
        handleSelect={handleSelect}
      />
      {products.length <= 0 ? <Spinner /> : <ProductList products={products} />}
      {error && <p>{error}</p>}
    </main>
  )
}

export default Products
