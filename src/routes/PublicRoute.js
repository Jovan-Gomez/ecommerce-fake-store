import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/authContext'

const PublicRoute = ({ children }) => {
  const { token } = useContext(AuthContext)
  return !token ? children : <Navigate to='/' />
}

export default PublicRoute
