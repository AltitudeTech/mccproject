import React, { Component, Fragment } from "react";
import "./StudentContent.scss";

export default class StudentContent2 extends Component {
  render() {
    return (
      <Fragment>
        <div className="services">
          <div className="container">
            <div className="col-md-5">
              <img
                src="/static/images/student1.png"
                alt=""
                srcset=""
                style={{
                  position: "relative",
                  left: "-40px",
                  top: "-50px",
                  zIndex: "2"
                }}
              />
            </div>
            <div
              className="col-md-7"
              style={{ background: "#F1F1F1", padding: "50px 100px" }}
            >
              <div>
                <h4>
                  BEFORE YOU CHOOSE YOUR SUBJECTS, ASK YOURSELF THESE QUESTIONS:
                </h4>
                <p>What are your passions and talents ?</p>
                <p>What careerc would you love ?</p>
                <p>
                  What subjects would enable youachieve your career objectives ?
                </p>
              </div>
              <div>
                <h4>WHAT YOU SHOULD NOT DO</h4>
                <p>Do not choose a career because of peer pressure</p>
                <p>
                  Do not choose your subjects just because that is what is
                  available
                </p>
                <p>
                  Do not choose a career simply because your parents or
                  relatives are in similar career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
