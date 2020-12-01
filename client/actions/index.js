export const GET_PRODUCTS = 'GET_PRODUCTS'

export const getProducts = () => {
  return {
    type: GET_PRODUCTS,
    action: products
  }
}

export const receiveProducts = (products) => {
  return {
  type: RECEIVE_PRODUCTS,
  products: products
  }
}
