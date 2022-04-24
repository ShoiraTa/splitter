import { Component, Fragment } from 'react';
import logo from '../images/logo.svg';
import BillInfo from './BillInfo';
import ResultInfo from './ResultInfo';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => (
    <div className="splitter-container-xl">
      <div>
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="splitter-container-sm d-flex justify-content-evenly col-lg-8 col-sm-12">
        <div className="splitter-left">
          <BillInfo />
        </div>
        <div className="splitter-right">
          <ResultInfo>
            <button type="button" className="reset-btn">
              RESET
            </button>
          </ResultInfo>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
