import React, { Component } from "react";

export default class Awards extends Component {
  render() {
    return (
      <div className="container">
        <div className="AwardsItems">
          <div className="AwardsOne">
            <img src={require("../../image/awards.png")} alt="" />
            <div>
              <h4>reddot design awards</h4>
              <p>product design</p>
            </div>
          </div>
          <div className="AwardsTwo">
            <div className="ItemWithName">
              <h3>Green</h3>
              <h3>Van</h3>
            </div>
            <h1>2014</h1>
          </div>
          <div className="AwardsThree">
            <img src={require("../../image/fleetworld.png")} alt="fleetworld"/>
          </div>
        </div>
      </div>
    );
  }
}
