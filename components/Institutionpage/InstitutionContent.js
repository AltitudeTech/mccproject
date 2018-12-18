import React, { Component, Fragment } from "react";
import "./InstitutionContent2.scss";

export default class InstitutionContent2 extends Component {
  render() {
    return (
      <Fragment>
        <div className="services">
          <div className="container">
            <div
              className="col-md-7"
              style={{ background: "#F1F1F1", padding: "50px 100px" }}
            >
              <div>
                <p>
                  Institutions may register, to create an institutional account
                  that enables the institution to purchase in bulk prices which
                  are 20 percent cheaper than individual student purchase.
                </p>
                <p>Register as an Institution.</p>
                <p>
                  All institutions that has benefited from MCC program have also
                  recorded a higher level of student performance in their chosen
                  subjects.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <img
                src="/static/images/institution1.png"
                alt=""
                srcset=""
                style={{
                  position: "relative",
                  left: "-100px",
                  top: "-50px",
                  zIndex: "2"
                }}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
