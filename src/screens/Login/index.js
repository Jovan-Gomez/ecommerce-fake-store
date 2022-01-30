import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import Container from '../../components/Container'
import Loading from '../../components/Loading'
import Title from '../../components/Title'
import { login } from '../../services/auth.service'
import { types } from '../../types'
import './index.css'
const Login = () => {
  const { dispatch } = useContext(AuthContext)
  const navigate = useNavigate()

  const [user, setUser] = useState({ username: 'mor_2314', password: '83r5^_' })
  const { username, password } = user
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    return () => setLoading(false)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    if ([username, password].includes('')) {
      setError('All fields are required')
      setLoading(false)
    }
    login(user)
      .then((token) => {
        if (!token) {
          setError('username or password is incorrect')
          setLoading(false)
          return
        }
        dispatch({
          type: types.login,
          payload: token,
        })
        setLoading(false)
        navigate('/', { replace: true })
      })
      .catch((err) => setError(err))
  }
  return (
    <Container>
      <Title>Login</Title>
      <div className='login__container'>
        <img src='/img/login.jpg' alt='login-logo' className='login__image' />
        <form className='login__form' onSubmit={handleSubmit}>
          <div className='login__input'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              name='username'
              id='username'
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>
          <div className='login__input'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          {loading ? <Loading /> : <input type='submit' value='Login' className='login' />}
          <p className='error'>{error}</p>
        </form>
      </div>
    </Container>
  )
}

export default Login
