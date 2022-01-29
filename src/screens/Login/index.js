import { useState } from 'react'
import Container from '../../components/Container'
import Title from '../../components/Title'
import { login } from '../../services/auth.service'
import './index.css'
const Login = () => {
  const [user, setUser] = useState({ username: '', password: '' })
  const handleSubmit = (e) => {
    e.preventDefault()
    login(user)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
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
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>
          <div className='login__input'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <input type='submit' value='Login' className='login' />
        </form>
      </div>
    </Container>
  )
}

export default Login
