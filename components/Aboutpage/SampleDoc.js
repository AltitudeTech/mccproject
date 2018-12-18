import React, { Component } from "react";
import "./SampleDoc.scss";

const documents = [
  {
    img: "mccbrochure.jpg",
    title: "MCC Brochure",
    link:
      "https://drive.google.com/file/d/0B7TXJNCnuUOaazZvNHN4R24zRnc/view?usp=sharing",
    label: "View MCC Sample Test"
  },
  {
    img: "mccbrochure.jpg",
    title: "MCC Sample Workbook",
    link:
      "https://drive.google.com/file/d/0B7TXJNCnuUOaazZvNHN4R24zRnc/view?usp=sharing",
    label: "View MCC Sample Workbook"
  },
  {
    img: "mccbrochure.jpg",
    title: "MCC Sample Report",
    link:
      "https://drive.google.com/file/d/0B7TXJNCnuUOaazZvNHN4R24zRnc/view?usp=sharing",
    label: "View MCC Sample Report"
  }
];

export default class SampleDoc extends Component {
  state = {};
  render() {
    return (
      <section className="sampledocrow">
        <div className="container">
          <div className="row">
            {documents.map(document => {
              return (
                <div className="col-md-4">
                  <img src="/static/images/mccbrochure.jpg" />
                  <h4>MCC Brochure</h4>
                  <a
                    href="https://drive.google.com/file/d/0B7TXJNCnuUOaazZvNHN4R24zRnc/view?usp=sharing"
                    target="_blank"
                  >
                    View MCC Sample Test{" "}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
