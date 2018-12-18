import { Component, Fragment } from "react";
import { Mutation, withApollo } from "react-apollo";
import { CREATE_ENQUIRY_MUTATION } from "../../lib/graphql/mutations";
import StyledTitle from "../Styled/StyledTitle";
import "./TextContent.scss";

export default class TextContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmationMessage: null
    };
  }

  onEquirySucessfull = data => {
    this.setState({ confirmationMessage: "Thank you for reaching out!!" });
    setTimeout(() => {
      this.setState({ confirmationMessage: null });
    }, 5000);
  };

  render() {
    let name, email, message;

    return (
      <Fragment>
        <div className="mail">
          <div className="container">
            <StyledTitle bold>
              OUR CUSTOMER SERVICE TEAM ARE WAITING FOR YOUR MESSAGE
            </StyledTitle>
          </div>
        </div>

        <div className="services-bottom">
          <div className="container">
            <div className="col-md-6 contactDetails">
              <div>
                <p>Telephone</p>
                <p>(+000) 123 456 456</p>
                <p>(+010) 123 456 456</p>
              </div>
              <div>
                <p>Email Address</p>
                <p>info@ycareerchoice.global</p>
              </div>
              <div>
                <p>Office Address</p>
                <p>3481 Melrose Place, 2K32 Street, Beverly Hills,</p>
                <p>New York City 90210</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contactForm">
                <Mutation
                  mutation={CREATE_ENQUIRY_MUTATION}
                  onCompleted={this.onEquirySucessfull}
                  onError={error => {
                    console.log(error);
                  }}
                >
                  {(createEnquiry, { data, error }) => (
                    <form
                      onSubmit={e => {
                        e.preventDefault();
                        e.stopPropagation();

                        createEnquiry({
                          variables: {
                            name: name.value,
                            email: email.value,
                            message: message.value
                          }
                        });

                        name.value = email.value = message.value = "";
                      }}
                    >
                      <input
                        type="text"
                        className="name"
                        name="name"
                        placeholder="Your Name"
                        required=""
                        ref={node => {
                          name = node;
                        }}
                      />
                      <input
                        type="email"
                        className="name"
                        name="email"
                        placeholder="Email"
                        required=""
                        ref={node => {
                          email = node;
                        }}
                      />
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        required=""
                        ref={node => {
                          message = node;
                        }}
                      />
                      <input type="submit" value="SEND MESSAGE" />
                      {error && <p>Issue occured while registering :(</p>}
                      {this.state.confirmationMessage && (
                        <p>{this.state.confirmationMessage}</p>
                      )}
                    </form>
                  )}
                </Mutation>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .contactForm ::-webkit-input-placeholder {
            color: #fff;
          }
          .contactForm:-moz-placeholder {
            color: #fff;
          }
          .contactForm ::-moz-placeholder {
            color: #fff;
          }
          .contact-main :-ms-input-placeholder {
            color: #fff;
          }
          .contactForm input[type="text"],
          .contactForm input[type="email"] {
            font-size: 1em;
            border: 1px solid #e5e5e5;
            background: #fff;
            outline: none;
            padding: 0.5em 1em;
            width: 100%;
            margin-bottom: 1em;
            color: #000;
          }
          .contactForm textarea {
            width: 100%;
            padding: 0.5em 1em;
            border: 1px solid #e5e5e5;
            background: #fff;
            resize: none;
            height: 100px;
            outline: none;
            border: none;
            font-size: 1em;
            color: #000;
          }
          .contactForm input[type="submit"] {
            background: #005f52;
            color: #fff;
            padding: 0.5em 1.8em;
            margin-top: 1.3em;
            border: 1px solid #ffffff;
            outline: none;
            font-size: 0.9em;
            border-radius: 5px;
          }
          .contactForm input[type="submit"]:hover {
            background: #11ab96;
          }
          .contactForm {
            margin: 0 auto;
            background: #f1f1f1;
            border-radius: 5px;
          }
          .contactForm form {
            width: 100%;
            padding: 3em;
            margin: 0 auto;
          }
        `}</style>
      </Fragment>
    );
  }
}
