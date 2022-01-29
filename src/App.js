import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layouts'
import Cart from './screens/Cart'
import Home from './screens/Home'
import Login from './screens/Login'
import Products from './screens/Products'
import ProductInfo from './screens/Products/ProductInfo'
import Register from './screens/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:productId' element={<ProductInfo />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
