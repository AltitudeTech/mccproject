import React, { Component, Fragment } from "react";
import { Mutation, withApollo } from "react-apollo";
import Link from "next/link";

import { NEWSLETTER_SUBSCRIPTION_MUTATION } from "../../lib/graphql/mutations";

let email;

export default props => (
  <Fragment>
    {/* <div>
      <img
        style={{ width: "100%" }}
        className="item"
        data-topimage="7%"
        width="728"
        usemap="#imgmap"
        src="/static/images/mobileBanner.jpg"
      />
      <map name="imgmap">
        <area
          shape="square"
          coords="780, 400 , 1030, 480"
          target="_blank"
          href="http://www.example.com/"
        />
      </map>
    </div> */}
    <div className="footer">
      <div className="container-fluid">
        <div className="col-md-3 ">
          <p>
            <img
              src="/static/images/mcclogo.png"
              className="img-responsive"
              alt=""
            />
          </p>
          <p className="copyright">
            <span>2018 MyCareerChoice. </span>
            <span>All rights reserved | Powered by</span>
            <span className="company">
              <a
                href="http://altitude-tech.com/"
                style={{ color: "#333 !important", marginBottom: "10px" }}
              >
                Altitude Technology Worldwide
              </a>
            </span>
          </p>
        </div>

        <div className="col-md-2 w3_footer_grid">
          <h3>About Us</h3>
          <ul>
            <li className="">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="">
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li className="">
              <Link href="/student">
                <a>Student</a>
              </Link>
            </li>

            <li className="">
              <Link href="/institution">
                <a>Institution</a>
              </Link>
            </li>
            <li className="">
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-md-3 w3_footer_grid">
          <h3>Info</h3>
          <ul>
            <li className="">
              <Link href="/affiliates">
                <a>Affiliates and agents</a>
              </Link>
            </li>
            <li className="">
              <Link href="/faq">
                <a>Frequently Asked Questions</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-4 w3_footer_grid">
          <h3>Newsletter</h3>
          <Mutation
            mutation={NEWSLETTER_SUBSCRIPTION_MUTATION}
            onCompleted={({ subscribeToNewsletter: { address } }) => {
              email.value = "";
              console.log(`${address} has subscribed sucessfully`);
            }}
            onError={error => {
              console.log(error);
            }}
          >
            {(subscribeToNewsletter, { data, error }) => (
              <form
                onSubmit={e => {
                  e.preventDefault();
                  e.stopPropagation();

                  subscribeToNewsletter({
                    variables: {
                      address: email.value
                    }
                  });
                }}
              >
                <input
                  required=""
                  ref={node => {
                    email = node;
                  }}
                  type="email"
                  name="email"
                  placeholder="Your email..."
                  required=""
                />
                <input type="submit" value=" " />
              </form>
            )}
          </Mutation>
          <p>
            Sign up now for more information about <span>MyCareerChoice</span>
            <img
              src="/static/images/paymentImage.png"
              style={{ width: "200px", marginLeft: "-12px" }}
              className="img-responsive"
              alt=""
            />
          </p>
          <p style={{ color: "#999" }}>
            MCC is a service offered by{" "}
            <img src="/static/images/cilogo.png" style={{ width: "150px" }} />
          </p>
        </div>
        <div className="clearfix" />
        <div className="w3layouts_footer_grid text-center">
          <p className="privacy">
            <Link href="">
              <a> Privacy Policy </a>
            </Link>{" "}
            |
            <Link href="">
              <a> Terms of Use </a>
            </Link>{" "}
            |
            <Link href="">
              <a> Cookie Policy </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  </Fragment>
);
