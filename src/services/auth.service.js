export const login = async (user) => {
  try {
    const url = `${process.env.REACT_APP_API_URL}/auth/login`
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(user),
    })
    const userApi = await response.json()
    return userApi
  } catch (error) {
    console.error(error)
  }
}
