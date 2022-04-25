import { Component, Fragment } from 'react';
import logo from '../images/logo.svg';
import BillInfo from './BillInfo';
import ResultInfo from './ResultInfo';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tipsPercentage: [5, 10, 15, 25, 30],
      selectedTip: 0,
      tipsPercentageCustom: 0,
      bill: '',
      peopleNum: 0,

      tipAmount: (0.0).toFixed(2),
      totalAmount: (0.0).toFixed(2),
    };
  }

  calculate = () => {
    if (this.state.selectedTip != 0 && this.state.bill != 0 && this.state.peopleNum != 0) {
      let totalTip = (this.state.bill / 100) * this.state.selectedTip;
      this.setState({
        tipAmount: (totalTip / this.state.peopleNum).toFixed(2),
        totalAmount: (parseInt(this.state.bill, 10) + totalTip) / this.state.peopleNum,
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedTip != this.state.selectedTip) {
      this.calculate();
    }
    if (prevState.bill != this.state.bill) {
      this.calculate();
    }

    if (prevState.peopleNum != this.state.peopleNum) {
      this.calculate();
    }
  }

  handleCustomTip = (tip) => {
    if (tip >= 0) this.setState({ tipsPercentageCustom: tip, selectedTip: tip });
  };

  render = () => (
    <div className="splitter-container-xl">
      <div>
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="splitter-container-sm  col-lg-8 col-sm-12">
        <div className="splitter-left">
          <BillInfo
            tipsPercentage={this.state.tipsPercentage}
            handleSelectedTip={(tip) => this.setState({ selectedTip: tip })}
            handleCustomTip={this.handleCustomTip}
            handleBill={(amount) => {
              if (amount >= 0) this.setState({ bill: amount });
            }}
            handlePeopleNum={(num) => {
              if (num >= 0) this.setState({ peopleNum: num });
            }}
            totalAmount={this.state.bill}
            peopleAmount={this.state.peopleNum}
            customTipVal={this.state.tipsPercentageCustom}
            selectedTip={this.state.selectedTip}
            clearInput={() => this.setState({ bill: '' })}
          />
        </div>
        <div className="splitter-right">
          <ResultInfo tipAmount={this.state.tipAmount} totalAmount={this.state.totalAmount}>
            <button
              type="button"
              className="reset-btn"
              onClick={() =>
                this.setState({
                  selectedTip: 0,
                  bill: '',
                  peopleNum: 1,
                  tipAmount: (0.0).toFixed(2),
                  totalAmount: (0.0).toFixed(2),
                  tipsPercentageCustom: 0,
                })
              }
            >
              RESET
            </button>
          </ResultInfo>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
