export const register = async (user) => {
  try {
    const url = `${process.env.REACT_APP_API_URL}/users`
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
