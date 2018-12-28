import React, { Component } from "react";
import Nav from "../components/Nav";
import TextContent from "../components/Pricingpage/TextContent";
import Layout from "../components/layout/Layout";

class StudentPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout>
        <Nav gold pageTitle="MCC PRICING PLAN" image="pricing.gif" />
        <div
          className="about"
          style={{
            backgroundImage: "url(/static/images/pat.png)"
          }}
        >
          <div className="container">
            <TextContent />
          </div>
        </div>
      </Layout>
    );
  }
}
export default StudentPage;
