import React, { Component, Fragment } from "react";
import StyledTitle from "../Styled/StyledTitle";
import "./StudentContent.scss";

export default class StudentContent extends Component {
  render() {
    return (
      <Fragment>
        <div className="services">
          <div className="container">
            <StyledTitle bold>EXPERIENCE THE POWER OF MCC</StyledTitle>
            <div className="studentContent">
              <p>
                Join millions of students around the world who are already
                enjoying the unique benefits of MCC.
              </p>
              <p>Secondary School.</p>
              <p>Higher Education.</p>
              <p>New graduates seeking their job.</p>
              <p>Graduate from one career to another.</p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
