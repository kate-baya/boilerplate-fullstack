import React from 'react'
import { connect } from 'react-redux'

class Product extends React.Component {
  render () {
    return ( 
      <div className='products'>
        {products.map((product, index) => (
          <div className='product' key={index}>
            <h3>{product.name}</h3>
            <h4>$ {product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>



    )
  }
}



export default connect()(Product)