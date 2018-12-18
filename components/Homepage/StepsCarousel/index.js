import React, { Component, Fragment } from "react";
import { Carousel } from "react-bootstrap";

export default class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    // alert(`selected=${selectedIndex}, direction=${e.direction}`);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  displayStateMent = step => {
    let message;
    step == 1 && (message = `Create an account`);
    step == 2 && (message = `Verify your account`);
    step == 3 && (message = `Login`);
    step == 4 && (message = `Make payment`);
    step == 5 && (message = `Receive your MCC Test Code`);
    step == 6 && (message = `Take the 15 minutes test`);
    step == 7 && (message = `Receive your result and make a career choice`);
    return `Step ${step} - ${message}`;
  };

  render() {
    const { index, direction } = this.state;

    return (
      <section style={{background : "#e5e5e5", padding : "3em 0"}}>
        <h2 className="carouselTitle">
          Sign up with{" "}
          <span style={{ color: "#005F52", fontWeight: "bold" }}>
            7 EASY STEPS
          </span>
        </h2>
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          indicators={false}
          style={{ minHeight: 400 }}
        >
          <Carousel.Item>
            <img
              className="steps-slide"
              width={"auto"}
              height={400}
              alt="step 1"
              src="/static/images/ani/1.gif"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="steps-slide"
              width={"50%"}
              height={400}
              alt="step 2"
              src="/static/images/ani/2.gif"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="steps-slide"
              width={"auto"}
              height={400}
              alt="step 3"
              src="/static/images/ani/3.gif"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="steps-slide"
              width={"50%"}
              height={400}
              alt="step 4"
              src="/static/images/ani/4.gif"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="steps-slide"
              width={"50%"}
              height={400}
              alt="step 5"
              src="/static/images/ani/5.gif"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="steps-slide"
              width={"50%"}
              height={400}
              alt="step 6"
              src="/static/images/ani/6.gif"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="steps-slide"
              width={"50%"}
              height={400}
              alt="step 7"
              src="/static/images/ani/7.gif"
            />
          </Carousel.Item>
        </Carousel>
        <h3>{this.displayStateMent(index + 1)}</h3>
        <style jsx>{`
          .steps-slide {
            display: block;
            margin: auto;
          }
          h3 {
            margin-top: 10px;
            text-align: center;
            color: #3e454d;
          }
          h2.carouselTitle {
            color: #3e454d;
            text-align: center;
            text-align: center;
            position: relative;
            padding-bottom: 0.5em;
            margin-bottom: 1em !important;
          }
          .carousel-control .glyphicon {
            color: #ff3102;
          }
        `}</style>
      </section>
    );
  }
}
