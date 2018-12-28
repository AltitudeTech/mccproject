import React, { Component, Fragment } from "react";

export default class Login extends Component {
  render() {
    return (
      <Fragment>
        <section className="login">Demo</section>
        <style jsx>{`
          .login {
            background-image: url(/static/images/pat.png);
            width: 100%;
            height: 100vh;
          }
        `}</style>
      </Fragment>
    );
  }
}
