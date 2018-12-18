import React, { Component, Fragment } from "react";
import Link from "next/link";
import Nav from "../components/Nav";
import Button from "@material-ui/core/Button";
import MccContent2 from "../components/Homepage/MccContent2";
import Layout from "../components/layout/Layout";

class IndexPage extends Component {
  static async getInitialProps({ query }) {
    return {
      showSignIn: query.show == "signIn"
    };
  }

  stlyes = {
    color: "white"
  };
  render() {
    return (
      <Layout>
        <Nav homepage="active" image="banner.jpg" />
        {/* <TextContent /> */}
        <div className="text-center">
          <h1
            style={{
              background: "linear-gradient(45deg, #005F52, #018977)",
              padding: "30px",
              fontWeight: "bolder",
              color: "#fff"
            }}
          >
            WELCOME TO MY CAREER CHOICE
          </h1>
        </div>
        <div
          className="banner-bottom"
          style={{
            backgroundColor: "#F1F1F1",
            marginTop: "0px",
            padding: "30px"
          }}
        >
          <div className="container ">
            <div className="row">
              <div className="col-sm-12 text-center">
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    width: "60%",
                    margin: "auto",
                    lineHeight: "40px"
                  }}
                >
                  The secret to career satisfaction lies in doing what you enjoy
                  most. Careers that match your personality style make the best
                  use of your natural gifts and talents and will give you the
                  greatest happiness in your life. There is a strong link
                  between the career you choose and your purpose in life. Your
                  Career is the vehicle that carries you to your purpose.
                </p>
                <div className="w3_more">
                  <Button
                    size="large"
                    color="primary"
                    variant="outlined"
                    href="about"
                  >
                    Read More
                  </Button>
                </div>
              </div>
              <div className="clearfix" />
            </div>
          </div>
        </div>
        <div className="about">
          <div className="container">
            <div className="row  text-center">
              <div className="col-md-6">
                <p className="personalityCaption">
                  My Career Choice MCC is a quick and reliable way of
                  discovering which career best suits your personality.
                </p>
                <p className="personalityMap">
                  <ol>
                    <li>1. Clear Sense of direction.</li>
                    <li>
                      2. Understand the link between personality style and
                      career success.
                    </li>
                    <li>3. Results are easy to understand.</li>
                    <li>4. Makes Career Choice easy.</li>
                    <li>5. Maximize your natural talent.</li>
                  </ol>
                </p>
                <p>
                  <Link href="">
                    <a
                      style={{
                        fontSize: "18px",
                        backgroundColor: "#E5E5E5",
                        borderRadius: "10px",
                        padding: "10px 20px",
                        fontWeight: "bolder"
                      }}
                    >
                      <span
                        style={{
                          background:
                            "linear-gradient(45deg, #005F52, #6C0B69)",
                          webkitBackgroundClip: " text",
                          webkitTextFillColor: " transparent"
                        }}
                      >
                        Discover Your Ideal Career In 15 Minutes
                      </span>
                    </a>
                  </Link>
                </p>
              </div>
              <div className="col-md-6">
                <h3
                  style={{
                    fontWeight: "500",
                    marginBottom: "20px",
                    marginTop: "30px"
                  }}
                >
                  CAREER PERSONALITY MAP
                </h3>
                <img
                  src="/static/images/personalitymap.png"
                  style={{ width: "80%", marginTop: "50px" }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <MccContent /> */}
        <MccContent2 />
        <div className="container" style={{ position: "relative" }}>
          <div
            style={{
              position: "relative",
              width: "450px",
              margin: "auto",
              marginTop: "30px"
            }}
          >
            MCC recognizes that human beings are uniquely talented and that if
            those talents are discovered early in life, they could be developed
            and managed to make a happy and successful career.
          </div>
          <div
            style={{
              position: "absolute",
              width: "400px",
              top: "250px",
              left: "100px"
            }}
          >
            MCC guarantees you a well informed decision making process based on
            your passion and talents.
          </div>
          <div
            style={{
              position: "absolute",
              width: "400px",
              top: "200px",
              right: "0px"
            }}
          >
            MCC gives you the opportunity not to repeat the mistakes of others
            and ensures your career decisions gives you the best chance to
            succeed in life.
          </div>
          <div
            style={{
              height: "498px",
              width: "324px",
              margin: "auto"
            }}
          >
            <img src="/static/images/mccrep.png" style={{ margin: "auto" }} />
          </div>
        </div>
        <style jsx>
          {`
            h4 {
              font-size: 26px;
              margin-bottom: 10px;
            }
            p.personalityMap {
              font-size: 1.5em;
              font-weight: normal;
              margin-bottom: 60px;
            }
            p.personalityMap ol li {
              font-size: 1em;
              list-style: none;
            }
            p.personalityCaption {
              background-color: #3e454d;
              font-size: 1.3em;
              padding: 30px;
              font-weight: 500;
              color: #fff;
              position: relative;
              margin-bottom: 60px;
            }
            p.personalityCaption:before {
              content: url("/static/images/openquote.png");
              position: absolute;
              top: -50px;
              left: -60px;
            }
            p.personalityCaption:after {
              content: url("/static/images/closequote.png");
              position: absolute;
              right: -33px;
              bottom: -40px;
            }
          `}
        </style>
      </Layout>
    );
  }
}
export default IndexPage;
