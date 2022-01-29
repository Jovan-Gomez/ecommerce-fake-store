import { Link } from 'react-router-dom'
import Container from '../components/Container'
import './index.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <div className='footer__container'>
          <nav className='footer__navbar'>
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </nav>
          <p className='copyright'>© All rights reserved</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
