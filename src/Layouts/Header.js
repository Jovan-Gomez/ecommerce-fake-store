import { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../auth/authContext'
import Container from '../components/Container'
import { types } from '../types'
import './index.css'
const Header = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { token, dispatch } = useContext(AuthContext)

  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    if (token && token.length > 0) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
      localStorage.removeItem('token')
    }
  }, [token])

  const handleLogout = () => {
    dispatch({
      type: types.logout,
    })
    navigate('/', { replace: true })
  }
  return (
    <header>
      <Container>
        <div className='header__container'>
          <Link to='/'>
            <img src='/img/logo.png' alt='logo' width={75} height={75} />
          </Link>
          <nav className='header__navbar'>
            <Link to='/' className={`${pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
            <Link to='/about' className={`${pathname === '/about' ? 'active' : ''}`}>
              About
            </Link>
            <Link to='/products' className={`${pathname === '/products' ? 'active' : ''}`}>
              Products
            </Link>
            {!isLogin ? (
              <>
                <Link to='/login' className={`${pathname === '/login' ? 'active' : ''}`}>
                  Login
                </Link>
                <Link to='/register' className={`${pathname === '/register' ? 'active' : ''}`}>
                  Register
                </Link>
              </>
            ) : (
              <>
                <button onClick={handleLogout} className='logout'>
                  Logout
                </button>
                <Link to='/cart' className={`${pathname === '/cart' ? 'active' : ''}`}>
                  <i className='bi bi-cart'></i>
                </Link>
              </>
            )}
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header
