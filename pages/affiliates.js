import React, { Component, Fragment } from "react";
import Nav from "../components/Nav";
import TextContent from "../components/AffiliatesPage/TextContent";
import RegisterBox from "../components/AffiliatesPage/RegisterBox";
import withLayout from "../hocs/withLayout";
import Layout from "../components/layout/Layout";

class AffiliatesPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout>
        <Nav image="affliatepage.png" pageTitle="Affliates & Agents" />
        <TextContent />
        <RegisterBox />
      </Layout>
    );
  }
}
export default AffiliatesPage;
