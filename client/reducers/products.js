import { GET_PRODUCTS } from '../actions/index'

function products (state = [], action) {
  switch(action.type) {
    case GET_PRODUCTS:
      return action.products
    
    default:
      return state  
  }
}
export default products