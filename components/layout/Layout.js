import React from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import Meta from "./Meta";
import NProgress from "nprogress";
import Scripts from "../Scripts";

// impor from '.'
// import NavBar from '../NavBar'
import { Footer } from "./index";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    color: ${props => props.theme.colors.mcc.black.dark};
    font-family: "Montserrat", sans-serif !important;
  }
  html, body{
    margin : 0 ;
    pading : 0 ;
    width: 100%;
    height: 100%;
  }
`;

// progress bar
Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = ({ children, settings = {} }) => (
  <>
    <GlobalStyle />
    <Meta />
    <div className="main">{children}</div>
    <Footer />
    <Scripts />
  </>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
};

export default Layout;
