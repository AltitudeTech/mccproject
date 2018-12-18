import React, { Component } from "react";
import StyledSection from "../styled/StyledSection";

export default class PageBanner extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <StyledSection
        style={{
          backgroundImage: "url(/static/images/about.png)",
          height: "210px",
          backgroundSize: "cover",
          backgroundPosition: "center top"
        }}
      >
        <StyledSection container>
          {this.props.title || "Title Here"}
        </StyledSection>
      </StyledSection>
    );
  }
}
