import { Component, Fragment } from 'react';

class MainContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customers: [
        {name: 'Anna', country: 'Russia'},
        {name: 'Alex', country: 'USA'},
        {name: 'Eva', country: 'Georgia'},
        {name: 'Kate', country: 'England'},
        {name: 'Matilda', country: ''},
      ],
      newCustomer:''
    }
  }

  customersRaw = () => {
    return (
      this.state.customers.map((customer, index) => (
        <tr key={customer.name}>
          <td style={{backgroundColor: (customer.name.startsWith('A')) ? 'beige' : 'azure'}}>{customer.name}
          
          </td>
          <td>
            {customer.country ? customer.country : 'Country is not available'} 
            <button 
            type='button'
            className='btn btn-outline-success m-3'
            onClick = { () =>
              this.handleDelete(customer, index)
            }
            >Delete country</button>
          </td>
        </tr>
       )
      )
    )
  }

  handleDelete = (cust, index) => {
    this.setState({
      customers: this.state.customers.map((item) => 
      item.name === cust.name ? {...item, country:'EU'} : item
      )
    })
  }

  updateNewCustomer = (event) => {
   
    this.setState({
      newCustomer:  event.target.value 
    })
  }

  updateCustomersList = () => {
    this.setState({
      customers:[...this.state.customers, 
        {name: this.state.newCustomer, 
        country: ''}]
    })
  }
    

  render = () => (
    <Fragment>
      <div className='container'>
        <div> 
          <h1 classame='d-inline m-0'>Customers</h1>
          <span>Add customer: </span>
          <input 
          type='text'
          value={this.state.newCustomer}
          onChange={this.updateNewCustomer} />
          <button 
          type='submit'
          onClick= {this.updateCustomersList
          }>Submit</button>
          <table className='table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
           {this.customersRaw()}
            </tbody>
          </table>
        </div>
      </div>

    </Fragment>
  )
}

export default MainContent