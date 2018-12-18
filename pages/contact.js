import React, { Component, Fragment } from "react";

import Nav from "../components/Nav";
import TextContent from "../components/Contactpage/TextContent";
import Layout from "../components/layout/Layout";

class ContactPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout>
        <Nav pageTitle="Contact Us" image="contactpage.png" />
        <TextContent />
      </Layout>
    );
  }
}
export default ContactPage;
