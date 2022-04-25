import { Component } from 'react';

class BillInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tips: this.props.tipsPercentage,
      btnBgColor: 'hsl(172, 81%, 73%)',
      btnTextColor: 'hsl(172, 81%, 73%)',
    };
  }
  setActiveBtnColor() {}

  render = () => {
    return (
      <div>
        <div className="bill-form-control">
          <label>Bill</label>
          <input
            type="number"
            className="form-input"
            onChange={(e) => this.props.handleBill(e.target.value)}
            value={this.props.totalAmount}
          />
        </div>
        <div className="tip-select">
          <span>Select Tip %</span>
          <div className="tips-container">
            {this.state.tips.map((tip, index) => (
              <div
                key={tip}
                className="tip"
                onClick={() => this.props.handleSelectedTip(tip)}
                style={{
                  backgroundColor: this.props.selectedTip === tip ? 'hsl(172, 81%, 73%)' : 'hsl(183, 100%, 15%)',
                  color: this.props.selectedTip === tip ? 'hsl(183, 100%, 15%)' : 'hsl(172, 81%, 73%)',
                }}
              >
                {tip}%
              </div>
            ))}
            <div className="tip tip-input-container">
              <input
                type="number"
                className="tip-input"
                placeholder="Custom"
                onChange={(e) => this.props.handleCustomTip(e.target.value)}
                value={this.props.customTipVal}
              />
            </div>
          </div>
        </div>
        <div className="bill-form-control">
          <div className="d-flex justify-content-between">
            <label>Number of people</label>
            {this.props.peopleAmount == 0 && <label className="text-orange">Can't be zero</label>}
          </div>

          <input
            style={{ border: this.props.peopleAmount == 0 ? '1px solid rgb(165, 56, 42)' : 'none' }}
            type="number"
            className="form-input bill-form-control-input"
            onChange={(e) => this.props.handlePeopleNum(e.target.value)}
            value={this.props.peopleAmount}
          />
        </div>
      </div>
    );
  };
}

export default BillInfo;
