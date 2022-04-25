import { Component } from 'react';

class ResultInfo extends Component {
  render = () => {
    return (
      <div className="split-right">
        <div className="total-container">
          <div className="amount">
            <div>
              <h1>Tip amount</h1>
              <span>/ person</span>
            </div>
            <div className="total-amount">${this.props.tipAmount}</div>
          </div>

          <div className="amount">
            <div>
              <h1>Total</h1>
              <span>/ person</span>
            </div>
            <div className="total-amount">${this.props.totalAmount}</div>
          </div>
        </div>

        <div className="btn-container">{this.props.children}</div>
      </div>
    );
  };
}

export default ResultInfo;
