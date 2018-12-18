import React, { Component } from "react";
import "./Cost.scss";

export default class Cost extends Component {
  state = {};
  render() {
    return (
      <div className="about aboutCost">
        <div className="container flex-container">
          <img src="/static/images/dollar.png" />
          <h1>COST OF MYCAREERCHOICE </h1>
          <div className="twentyFive">
            <h3>$25</h3>
            <span>only</span>
          </div>
        </div>
      </div>
    );
  }
}
