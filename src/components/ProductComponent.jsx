import React, {Component, Fragment} from 'react';

class ProductComponent extends Component{
  constructor(props){
    super(props)
    this.state = {
     product: this.props.prod
    }
  }
  render(){
    return(
      <div className='col-lg-6 col-sm-12'>
        <div className='card m-2'>
          <div className='card-body'>
            <div className='text-muted d-flexjustify-content-between align-items-center mb-3'>
              # {this.state.product.id}
              <span className='pull-right' onClick={()=> this.props.handleDelete(this.props.prod)}><i className='fa fa-times' /></span>
            </div>
            
            <h5 className='pt-4 border-top'>{this.state.product.name}</h5>
            <div className=''>${this.state.product.price}</div>
            <div className='card-footer d-flex justify-content-between'>
              <div>
                <span className='badge text-dark'>{this.props.prod.quantity}</span>
                <div className='btn-group pl-2'>
                  <button className='btn btn-outline-success' onClick={() => this.props.handleIncrement(this.state.product, 10)}>+</button>
                  <button className='btn btn-outline-success' onClick={() => this.props.handleDecrement(this.state.product, 0)}>-</button>
                </div>
              </div>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductComponent