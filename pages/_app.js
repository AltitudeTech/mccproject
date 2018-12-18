import App, { Container } from "next/app";
import React from "react";
import NProgress from "nprogress";
import { ApolloProvider } from "react-apollo";
import withApollo from "../lib/withApollo";
import Router from "next/router";
import { ThemeProvider } from "styled-components";
import { theme } from "../assets/pageContext";

const linkStyle = {
  margin: "0 10px 0 0"
};

Router.events.on("routeChangeStart", url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
