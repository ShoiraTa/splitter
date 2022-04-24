import { Component } from 'react';
import usdlogo from '../images/icon-dollar.svg';

class BillInfo extends Component {
  render = () => {
    return (
      <div>
        <div className="bill-form-control">
          <label>Bill</label>
          <input type="number" className="form-input" />
        </div>
        <div className="tip-select">
          <span>Select Tip %</span>
          <div className="tips-container">
            <div className="tip">5%</div>
            <div className="tip">5%</div>
            <div className="tip">5%</div>
            <div className="tip">5%</div>
            <div className="tip">5%</div>
            <div className="tip tip-input-container">
              <input className="tip-input" placeholder="Custom" />
            </div>
          </div>
        </div>
        <div className="bill-form-control">
          <label>Number of people</label>
          <input type="number" className="form-input bill-form-control-input" />
        </div>
      </div>
    );
  };
}

export default BillInfo;
