import React, { Component } from "react";
import StyledTitle from "../Styled/StyledTitle";
import "./WhyMcc.scss";

export default class WhyMcc extends Component {
  state = {};
  render() {
    return (
      <section className="whymcc">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <StyledTitle>Why My Career Choice</StyledTitle>
              <ul>
                <li>Reveal your true passion and talents</li>
                <li>Reduce rate of career failures</li>
                <li>Reduce Job mismatches</li>
                <li>Secure a bright future</li>
                <li>Know more about yourself</li>
              </ul>
            </div>
            <div className="col-md-6">
              <StyledTitle>How It Works</StyledTitle>
              <ul>
                <li>1. Register</li>
                <li>2. Make a payment</li>
                <li>3. Take MCC test</li>
                <li>4. Receive your report</li>
                <li>
                  5. Review the report and follow the work book in making your
                  career decision
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
