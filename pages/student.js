import React, { Component, Fragment } from "react";
import Nav from "../components/Nav";
import StudentContent from "../components/Studentpage/StudentContent";
import StudentContent2 from "../components/Studentpage/StudentContent2";
import Layout from "../components/layout/Layout";
import TextContent2 from "../components/Aboutpage/TextContent2";
import Cost from "../components/Aboutpage/Cost";

class StudentPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout>
        <Nav pageTitle="Student" image="studentpage.png" />
        <StudentContent />
        <TextContent2 />
        <StudentContent2 />
        <Cost />
      </Layout>
    );
  }
}
export default StudentPage;
