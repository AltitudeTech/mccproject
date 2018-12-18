import React, { Component, Fragment } from "react";
import { LoginModalContext } from "../../contexts/LoginModalContext";
import StyledTitle from "../Styled/StyledTitle";

export default class TextContent extends Component {
  render() {
    return (
      <Fragment>
        <div className="services">
          <div className="container">
            <StyledTitle bold>
              LET YOUR INSTITUTION EXPERIENCE THE IMPACT OF MCC
            </StyledTitle>

            <div className="col-md-12 text-center">
              <p>
                Ideal for secondary schools, colleges, polytechnics,
                universties, youth organizations, employers and government
                institutions.
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
