import { Component, Fragment } from 'react';

class MainContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 5,
    }
  }

  handleAdd = () => {
    this.setState({
      count: this.state.count += 2
    })
  }

  render = () => (
    <Fragment>
      <div className='row'>
        <div className=' d-flex col-12 align-items-center justify-content-center'> 
          <h1 className='d-inline m-0'>{this.state.count}</h1>
          <button className='btn  btn-info m-3' onClick={this.handleAdd}>Add 1</button>
        </div>
      </div>

    </Fragment>
  )
}

export default MainContent