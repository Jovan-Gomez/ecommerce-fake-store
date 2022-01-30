import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../auth/authContext'
import Container from '../components/Container'
import './index.css'

const Footer = () => {
  const { token } = useContext(AuthContext)

  return (
    <footer className='footer'>
      <Container>
        <div className='footer__container'>
          <nav className='footer__navbar'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/products'>Products</Link>
            {!token && (
              <>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
              </>
            )}
          </nav>
          <p className='copyright'>© All rights reserved</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
