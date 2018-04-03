import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  updateAddress1,
  updateAddress2,
  updateAddress3
} from "../../ducks/reducer";

class WizardNine extends Component {
  render() {
    const { updateAddress1, updateAddress2, updateAddress3 } = this.props;
    return (
      <div className="parent-div">
        <div className="vert-align">
          <p>What is your address?</p> <br />
          <input
            type="text"
            placeholder="Line One"
            onChange={event => updateAddress1(event.target.value)}
          />
          <input
            type="text"
            placeholder="Line Two"
            onChange={event => updateAddress2(event.target.value)}
          />
          <input
            type="text"
            placeholder="Line Three"
            onChange={event => updateAddress3(event.target.value)}
          />
          <Link to="/wTen">
            <button className="margin-btn"> Next </button>
          </Link>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { address1, address2, address3 } = state;
  return {
    address1,
    address2,
    address3
  };
}
export default connect(mapStateToProps, {
  updateAddress1,
  updateAddress2,
  updateAddress3
})(WizardNine);
