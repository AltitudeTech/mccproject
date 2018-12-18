import React, { Component } from "react";
import { List, ListItem } from "material-ui/List";
import ActionGrade from "material-ui/svg-icons/action/grade";
import { greenA900, pinkA200, transparent } from "material-ui/styles/colors";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import StyledTitle from "../Styled/StyledTitle";

export default class TextContent extends Component {
  render() {
    return (
      <div className="services">
        <div className="container">
          <StyledTitle bold>WHAT IS MY CAREER CHOICE?</StyledTitle>
          <div className="w3l_services_grids">
            <div className="row">
              <div className="col-md-12">
                <p
                  style={{ margin: "auto", width: "80%", textAlign: "center" }}
                >
                  MCC is an online personality assessment program that matches
                  personalities to specific career. MCC is suitable for youth
                  from age 13 to adulthood. It is highly beneficial to
                  undergraduates and postgraduates and those seeking to change
                  careers regardless of age.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
