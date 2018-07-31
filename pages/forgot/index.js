import React, { Component, Fragment } from 'react'
import { Mutation } from 'react-apollo'

import withMUI from '../../hocs/withMUI'
import { SEND_RESET_PASSWORD_MUTATION } from '../../lib/graphql/mutations'

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class IndexPage extends Component {
  state = {
    email: '',
    showform: true,
    errorMessage: '',
    sentToAddress: ''
  }

  showError = message => {
    this.setState({errorMessage: message})
    setTimeout(()=>this.setState({errorMessage: ''}), 3500)
  }

  render(){
    const { showform, email, errorMessage, sentToAddress } = this.state;
    return (<Fragment>
      {/* <div className="card-wrapper" style={{
        maxWidth:'500px',
        margin:'auto'
      }}> */}
      <div className="card-wrapper">
        { showform ? (
          <Mutation mutation={SEND_RESET_PASSWORD_MUTATION}
            onCompleted={(data)=>this.setState({
              showform: false,
              sentToAddress: data.userSendPasswordResetLink ? data.userSendPasswordResetLink.email : ''
            })}
            onError={(error)=>{
              console.log(error)

              if (error.graphQLErrors.length==0)
                this.showError("Something went wrong while contacting the server")

              error.graphQLErrors.forEach(error=>{
                switch(error.message) {
                  case `user not found`:
                  this.showError("This account does not exist in our database")
                  break;
                  default:
                  this.showError("Something went wrong while contacting the server")
                }
              })
            }}>{
              (doMutation, {data, error, loading}) => (
                <form onSubmit={e=>{
                  e.preventDefault();
                  e.stopPropagation();

                  doMutation({variables: {email}})
                }}>
                <Card>
                  <div className="p-20" >

                    <CardTitle title="Forgot your password?"/>
                    <CardText>
                      Enter your email address below to reset your password. You will be sent an email which you will need to open to continue. You may need to check your spam folder.
                      <br/>
                      <TextField
                        underlineFocusStyle={{borderColor: "#0c6053"}}
                        floatingLabelFocusStyle={{color: "#0c6053"}}
                        fullWidth={true}
                        value={email}
                        onChange={e=>this.setState({email: e.target.value})}
                        floatingLabelText="Email"
                        type="email"
                        required={true}
                      />
                      <br/>
                      {errorMessage && <span className="error">{errorMessage}</span>}
                    </CardText>
                    <CardActions style={{textAlign: 'right'}}>
                      { loading ? (
                        <div className="spinner">
        									<div className="rect1"></div>
        									<div className="rect2"></div>
        									<div className="rect3"></div>
        									<div className="rect4"></div>
        									<div className="rect5"></div>
        								</div>
                      ) : (
                        <RaisedButton
                          label="Submit"
                          backgroundColor='#0c6053'
                          labelColor="white"
                          type="submit"
                          // disabled={loading}
                        />
                      )}
                    </CardActions>
                  </div>
                </Card>
              </form>
              )
            }</Mutation>
        ) : (
          <Card>
            <CardTitle title="Your password reset email has been sent!"/>
            <CardText>
              We have sent a password reset email to your email address:
              <br/>
              <b>{sentToAddress}</b>
              <br /> <br />
              Please check your inbox to continue.
            </CardText>
          </Card>
        ) }
        {/* <br/> */}
        <a href="/?show=signIn">back to login</a>
      </div>
      <style jsx global>{`
        body{
          background-color: #e4e6e6;
        }
        .p-20{
          padding: 20px;
        }
        .error{
          color: #e63333;
        }
        .card-wrapper{
          position:absolute;
          top:50%;
          left:50%;
          padding:15px;
          min-width:300px;
          -ms-transform: translateX(-50%) translateY(-50%);
          -webkit-transform: translate(-50%,-50%);
          transform: translate(-50%,-50%);

          // margin: auto;
          // top: 0;
          // right: 0;
          // bottom: 0;
          // left: 0;
          // max-width:500px ;
          // max-height : 100px ;
        }
        a{
          color: #337ab7;
          text-decoration: none;
          float: right;
          font-family: Roboto, sans-serif;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          margin: 15px;
        }
        a:hover{
          color: #23527c;
          text-decoration: none;
        }
        .spinner {
          // margin: 100px auto;
          width: 100%;
          height: 40px;
          text-align: right;
          font-size: 10px;
        }

        .spinner > div {
          background-color: #0c6053;
          // background-color: #09925E;
          // background-color: #ffffff;
          height: 100%;
          width: 6px;
          display: inline-block;

          -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
          animation: sk-stretchdelay 1.2s infinite ease-in-out;
        }

        .spinner .rect2 {
          -webkit-animation-delay: -1.1s;
          animation-delay: -1.1s;
        }

        .spinner .rect3 {
          -webkit-animation-delay: -1.0s;
          animation-delay: -1.0s;
        }

        .spinner .rect4 {
          -webkit-animation-delay: -0.9s;
          animation-delay: -0.9s;
        }

        .spinner .rect5 {
          -webkit-animation-delay: -0.8s;
          animation-delay: -0.8s;
        }

        @-webkit-keyframes sk-stretchdelay {
          0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
          20% { -webkit-transform: scaleY(1.0) }
        }

        @keyframes sk-stretchdelay {
          0%, 40%, 100% {
            transform: scaleY(0.4);
            -webkit-transform: scaleY(0.4);
          }  20% {
            transform: scaleY(1.0);
            -webkit-transform: scaleY(1.0);
          }
        }
      `}</style>
    </Fragment>)
  }
}
export default withMUI(IndexPage)
