import React from 'react'
import {connect} from 'react-redux'
//import {fetchTodos} from '../apis/todosApi'
//import {receiveTodos} from '../actions/index'
//import Todo from './Todo'
import { getProducts } from '../apis/apiclient'

class Products extends React.Component {
    
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
                    return <Todo key={id} id={id} price={price} />
                })}
            </ul>
         </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.product
    }
}

export default connect(mapStateToProps)(Products)