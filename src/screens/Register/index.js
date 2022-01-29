import { useState } from 'react'
import Container from '../../components/Container'
import Title from '../../components/Title'
import { register } from '../../services/user.service'
import './index.css'

const Register = () => {
  const [user, setUser] = useState({
    email: '',
    phone: '',
    username: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    register(user)
      .then((res) => console.log(res))
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
          <input type='submit' value='Register' className='register' />
        </form>
      </div>
    </Container>
  )
}

export default Register
