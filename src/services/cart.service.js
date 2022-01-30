export const getProductsCart = async () => {
  try {
    const url = `${process.env.REACT_APP_API_URL}/carts/1`
    const response = await fetch(url)
    const products = await response.json()
    return products
  } catch (error) {
    console.error(error)
  }
}
