import { Link, useLocation } from 'react-router-dom'
import Container from '../components/Container'
import './index.css'
const Header = () => {
  const { pathname } = useLocation()
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
            <Link to='/products' className={`${pathname === '/products' ? 'active' : ''}`}>
              Products
            </Link>
            <Link to='/login' className={`${pathname === '/login' ? 'active' : ''}`}>
              Login
            </Link>
            <Link to='/register' className={`${pathname === '/register' ? 'active' : ''}`}>
              Register
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header
