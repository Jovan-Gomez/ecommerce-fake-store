import axios from 'axios'

export const login = async (user) => {
  try {
    const url = `${process.env.REACT_APP_API_URL}/auth/login`

    const {
      data: { token },
    } = await axios.post(url, user)
    return token
  } catch (error) {
    console.error(error)
  }
}
