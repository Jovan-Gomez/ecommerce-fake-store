export const getAllProducts = async () => {
  try {
    const url = `${process.env.REACT_APP_API_URL}/products`
    const response = await fetch(url)
    const products = await response.json()
    return products
  } catch (error) {
    console.error(error)
  }
}

export const getProductById = async (id) => {
  try {
    const url = `${process.env.REACT_APP_API_URL}/products/${id}`
    const response = await fetch(url)
    const product = await response.json()
    return product
  } catch (error) {
    console.error(error)
  }
}
