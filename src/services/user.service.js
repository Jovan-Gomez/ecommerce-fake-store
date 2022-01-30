import axios from 'axios'

export const register = async (user) => {
  try {
    const url = `${process.env.REACT_APP_API_URL}/users`
    const { data } = axios.post(url, user)
    return data
  } catch (error) {
    console.error(error)
  }
}
