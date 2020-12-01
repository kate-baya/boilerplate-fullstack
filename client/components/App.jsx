import React from 'react'
import { connect } from 'react-redux'

import { getProducts } from '../actions'

export class App extends React.Component {
  
  componentDidMount () {
    getProducts()
    .then(products => {
        this.props.dispatch(getProducts(products))
    })
  }

render () {
    return ( 
      <>
      <h1>Products</h1>
        <ul className="product-list">
            {this.props.products.map((item, id) => {
                return <Product key={id} id={id} price={price} />
            })}
        </ul>
     </>
    )
  }
}  

function mapStateToProps (globalState) {
  return {
    products: globalState.products
  }
}

export default connect(mapStateToProps)(App)
