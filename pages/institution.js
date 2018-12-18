import React, { Component, Fragment } from "react";
import TextContent from "../components/Institutionpage/TextContent";
import Nav from "../components/Nav";
import InstitutionContent from "../components/Institutionpage/InstitutionContent";
import Layout from "../components/layout/Layout";
import Cost from "../components/Aboutpage/Cost";
import TextContent2 from "../components/Aboutpage/TextContent2";

class InstitutionPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout>
        <Nav pageTitle="Institution" image="institutionpage.png" />
        <TextContent />
        <TextContent2 />
        <InstitutionContent />
        <Cost />
      </Layout>
    );
  }
}
export default InstitutionPage;
