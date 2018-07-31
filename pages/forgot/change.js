import React, { Component, Fragment } from 'react'
import { Mutation, withApollo } from 'react-apollo'

import withMUI from '../../hocs/withMUI'
import { USER_CHANGE_PASSWORD_MUTATION } from '../../lib/graphql/mutations'

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class IndexPage extends Component {
  static async getInitialProps({query}) {
    return {
      code: query.code ? query.code : null
    }
  }

  state = {
    password: '',
    confirmPassword: '',
    showform: true,
    errorMessage: '',
  }

  showError = message => {
    this.setState({errorMessage: message})
    setTimeout(()=>this.setState({errorMessage: ''}), 3500)
  }

  onCompleted = (data) => {
    const { jwt, name, userType } = data.userResetPassword
    this.setState({
      showform: false,
      errorMessage: '',
    })

    document.cookie = cookie.serialize('token', jwt, {
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/'
    })
    document.cookie = cookie.serialize('userType', userType, {
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/'
    })
    // Force a reload of all the current queries now that the user is
    // logged in
    this.props.client.resetStore().then(() => {
      // const target = this.props.url.query.from || `/user/dashboard`;
      let target = `/user/dashboard`;
      userType == 'Candidate' && (target=`/user/dashboard`);
      userType == 'Institution' && (target=`/institution/dashboard`);
      userType == 'Affiliate' && (target=`/affiliate/dashboard`);
      setTimeout(()=>redirect({}, target), 4*1000)
    })
  }

  onError = (error) => {
    console.log(error);
    // this.showError(`There was an issue contacting the server`)
    if (error.graphQLErrors.length==0)
      this.showError(`There was an issue contacting the server`)

    error.graphQLErrors.forEach(error=>{
      switch(error.message) {
        case `expired token`:
        this.showError(`This link has expired, start the password reset process again to get a new one`)
        break;
        default:
        this.showError(`Something went wrong while contacting the server`)
      }
    })
  }

  render(){
    const { code } = this.props;
    const { showform, password, confirmPassword, errorMessage } = this.state;
    return (<Fragment>
      {/* <div className="card-wrapper" style={{
        maxWidth:'500px',
        margin:'auto'
      }}> */}
      <div className="card-wrapper">
        { showform ? (
          <Mutation mutation={USER_CHANGE_PASSWORD_MUTATION}
            onCompleted={this.onCompleted}
            onError={this.onError}>{
              (doMutation, {data, error, loading}) => (
                <form onSubmit={e=>{
                  e.preventDefault();
                  e.stopPropagation();

                  if (password == confirmPassword) {
                    doMutation({variables: {
                      code,
                      newPassword: password
                    }})
                  } else {
                    this.showError('The passwords above do not match')
                  }
                }}>
                <Card>
                  <div className="p-20" >

                    <CardTitle title="Change Your Password?"/>
                    <CardText>
                      Enter your mew account password below. Once confirmed, you'll be logged into your account and your new password will be active.
                      <br/>
                      <TextField
                        underlineFocusStyle={{borderColor: "#0c6053"}}
                        floatingLabelFocusStyle={{color: "#0c6053"}}
                        fullWidth={true}
                        value={password}
                        onChange={e=>this.setState({password: e.target.value})}
                        floatingLabelText="Password"
                        type="password"
                        required={true}
                      />
                      <TextField
                        underlineFocusStyle={{borderColor: "#0c6053"}}
                        floatingLabelFocusStyle={{color: "#0c6053"}}
                        fullWidth={true}
                        value={confirmPassword}
                        onChange={e=>this.setState({confirmPassword: e.target.value})}
                        floatingLabelText="Password (again)"
                        type="password"
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
            <CardTitle title="Password Change Complete!"/>
            <CardText>
              Your password has been changed, and you have been logged into your account. You will be redirected to the site in 5 seconds.
            </CardText>
          </Card>
        ) }
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
export default withMUI(withApollo(IndexPage))
