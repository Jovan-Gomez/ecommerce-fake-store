import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '../../components/Container'
import Loading from '../../components/Loading'
import Title from '../../components/Title'
import { register } from '../../services/user.service'
import './index.css'

const Register = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    email: '',
    phone: '',
    username: '',
    password: '',
  })
  const { email, username, password, phone } = user

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    return () => setLoading(false)
  }, [])

  const resetValues = () => {
    setUser({
      email: '',
      phone: '',
      username: '',
      password: '',
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    if ([email, username, password, phone].includes('')) {
      setError('All fields are required')
      setLoading(false)
      return
    }
    const userInfo = {
      ...user,
      address: {
        city: '',
        street: '',
        number: '',
        zipcode: '',
        geolocation: {
          lat: '',
          long: '',
        },
      },
    }
    register(userInfo)
      .then(() => {
        setLoading(false)
        navigate('/login', { replace: true })
        resetValues()
      })
      .catch((err) => console.log(err))
  }
  return (
    <Container>
      <Title>Register</Title>
      <div className='register__container'>
        <img src='/img/register.png' alt='register-logo' className='register__image' />
        <form className='register__form' onSubmit={handleSubmit}>
          <div className='register__input'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' onChange={(e) => setUser({ ...user, email: e.target.value })} />
          </div>
          <div className='register__input'>
            <label htmlFor='phone'>Phone</label>
            <input type='tel' name='phone' id='phone' onChange={(e) => setUser({ ...user, phone: e.target.value })} />
          </div>
          <div className='register__input'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              name='username'
              id='username'
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>
          <div className='register__input'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          {loading ? <Loading /> : <input type='submit' value='Register' className='register' />}
          <p className='error'>{error}</p>
        </form>
      </div>
    </Container>
  )
}

export default Register
