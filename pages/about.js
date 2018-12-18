import React, { Component, Fragment } from "react";
import Nav from "../components/Nav";
import TextContent from "../components/Aboutpage/TextContent";
import TextContent2 from "../components/Aboutpage/TextContent2";
import SampleDoc from "../components/Aboutpage/SampleDoc";
import WhyMcc from "../components/Aboutpage/WhyMcc";
import Cost from "../components/Aboutpage/Cost";
import StepsCarousel from "../components/Homepage/StepsCarousel/";
import Layout from "../components/layout/Layout";

class AboutPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <Layout>
          <Nav pageTitle="About Us" image="about.png" />
          <TextContent />
          <TextContent2 />
          <WhyMcc />
          <SampleDoc />
          <StepsCarousel />
          <Cost />
        </Layout>
      </Fragment>
    );
  }
}
export default AboutPage;
