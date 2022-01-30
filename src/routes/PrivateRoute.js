import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/authContext'
const PrivateRoute = ({ children }) => {
  const { token } = useContext(AuthContext)
  return !token ? <Navigate to='/login' /> : children
}

export default PrivateRoute
