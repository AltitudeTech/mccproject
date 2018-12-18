import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

const Meta = props => (
  <Head>
    {props.title ? <title>{props.title}</title> : ""}
    {props.description ? (
      <meta name="description" content={props.description} />
    ) : (
      ""
    )}
    <meta
      name="viewport"
      content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
    />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta charSet="utf-8" />
    <link rel="stylesheet" href="/static/css/font-awesome.min.css" />
    {/* Import CSS for nprogress */}

    <link rel="stylesheet" type="text/css" href="/static/css/nprogress.css" />
    <link
      href="/static/css/bootstrap.min.css"
      rel="stylesheet"
      type="text/css"
      media="all"
    />
    <link
      href="/static/css/style.css"
      rel="stylesheet"
      type="text/css"
      media="all"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="/static/css/font-awesome.min.css" />
    <link rel="stylesheet" href="/static/css/nprogress.css" />
  </Head>
);

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default Meta;
