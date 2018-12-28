import React, { Component, Fragment } from "react";
import Nav from "../components/Nav";
import TextContent from "../components/FAQPage/TextContent";
import Layout from "../components/layout/Layout";

class FAQPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout>
        <Nav
          pageTitle="Frequently Asked Questions (FAQs)"
          image="faqpage.png"
        />
        <TextContent />
      </Layout>
    );
  }
}
export default FAQPage;
