import { useEffect, useReducer } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layouts'
import Cart from './screens/Cart'
import Home from './screens/Home'
import Login from './screens/Login'
import Products from './screens/Products'
import ProductInfo from './screens/Products/ProductInfo'
import Register from './screens/Register'
import { AuthContext } from './auth/authContext'
import { authReducer } from './auth/authReducer'
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'
import About from './screens/About'

const init = () => {
  return JSON.parse(localStorage.getItem('token')) || ''
}
function App() {
  const [token, dispatch] = useReducer(authReducer, {}, init)

  useEffect(() => {
    if (!token) return
    localStorage.setItem('token', JSON.stringify(token))
  }, [token])

  return (
    <AuthContext.Provider value={{ token, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:productId' element={<ProductInfo />} />
            <Route
              path='/login'
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path='/register'
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />

            <Route
              path='/cart'
              element={
                <PrivateRoute>
                  <Cart />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
