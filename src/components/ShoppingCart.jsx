import { Component, Fragment } from 'react';
import ProductComponent from './ProductComponent';

class ShoppingCart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products :[
        {id: 1, name: 'TV', price: 200, quantity: 2},
        {id: 2, name: 'iPhone7', price: 300, quantity: 1},
        {id: 3, name: 'Xbox', price: 100, quantity: 1},
        {id: 4, name: 'Laptop', price: 300, quantity: 1},
      ]
    }
  }

  handleDelete = (product) =>{
    if(window.confirm('Are you sure?')){
      this.setState({
        products: this.state.products.filter((item) =>
        item.id != product.id
        )
      })
    }
  }

  handleIncrement=(product, max) => {
    this.setState({
      products: this.state.products.map((prod)=> 
        prod.id === product.id  && prod.quantity < max ? {...prod, quantity: prod.quantity+1} : prod
      )
    })
  }

  handleDecrement=(product,min) => {
    this.setState({
      products: this.state.products.map((item) => 
      item.id === product.id && item.quantity > min ? {...item, quantity: item.quantity-1} : item
      )
    })
  }
  render() {
    return(
      <div className='container-fluid'>
        <div>
          <h1>Shopping Cart</h1>
        </div>
        <div className='row'>
          {this.state.products.map((prod) => {
            return(
            <ProductComponent 
            key={prod.id} 
            prod={prod} 
            handleIncrement={this.handleIncrement}
            handleDecrement = {this.handleDecrement}
            handleDelete = {this.handleDelete}
            > 
              <button type='button' className='btn btn-outline-primary'>Buy now</button>
            </ProductComponent>
            )
          })
          }
        </div>
      </div>


    )
  }
}

export default ShoppingCart