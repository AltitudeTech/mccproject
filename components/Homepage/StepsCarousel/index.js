import React, { Component, Fragment } from 'react'
import { Carousel } from 'react-bootstrap'

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

	displayStateMent = (step) => {
		let message;
		step==1 && (message = `Sign Up`);
		step==2 && (message = `Login`);
		step==3 && (message = `Verify your account`);
		step==4 && (message = `Log into your portal`);
		step==5 && (message = `Make payment`);
		step==6 && (message = `Receive your MCC Test Code`);
		step==7 && (message = `Take the 15 minutes test`);
		step==8 && (message = `Receive your result and make a career choice`);
		return `Step ${step} - ${message}`
	}

  render() {
    const { index, direction } = this.state;

    return (
			<Fragment>
				<h2 className="w3ls_para">8 Easy Steps</h2>
				<Carousel
					activeIndex={index}
					direction={direction}
					onSelect={this.handleSelect}
					indicators = {false}
					style={{minHeight: 400}}
					>
						<Carousel.Item>
							<img className="steps-slide" width={'auto'} height={400} alt="step 1" src="/static/images/ani/Sign-Up.gif" />
						</Carousel.Item>
						<Carousel.Item>
							<img className="steps-slide" width={'auto'} height={400} alt="step 2" src="/static/images/ani/Login.gif" />
						</Carousel.Item>
						<Carousel.Item>
							<img className="steps-slide" width={'auto'} height={400} alt="step 3" src="/static/images/ani/Email-Verification.gif" />
						</Carousel.Item>
						<Carousel.Item>
							<img className="steps-slide" width={'auto'} height={400} alt="step 4" src="/static/images/ani/Candidate-Portal-Animation.gif" />
						</Carousel.Item>
						<Carousel.Item>
							<img className="steps-slide" width={'auto'} height={400} alt="step 5" src="/static/images/ani/Candidate-Portal-Animation.gif" />
						</Carousel.Item>
						<Carousel.Item>
							<img className="steps-slide" width={'auto'} height={400} alt="step 6" src="/static/images/ani/Candidate-Portal-Animation.gif" />
						</Carousel.Item>
						<Carousel.Item>
							<img className="steps-slide" width={'auto'} height={400} alt="step 7" src="/static/images/ani/Candidate-Portal-Animation.gif" />
						</Carousel.Item>
						<Carousel.Item>
							<img className="steps-slide" width={'auto'} height={400} alt="step 8" src="/static/images/ani/Candidate-Portal-Animation.gif" />
						</Carousel.Item>
					</Carousel>
						<h3>
							{this.displayStateMent(index+1)}
						</h3>
						<style jsx>{`
							.steps-slide {
								display: block;
								margin: auto;
							}
							h3 {
								margin-top: 10px;
								text-align: center;
    						color: white;
							}
							.carousel-control {
								background-image: none;
							}

							.carousel-control .glyphicon {
								color: #ff3102;
							}
						`}</style>
			</Fragment>
    );
  }
}
