import { Component } from 'react'
import { Mutation, withApollo } from 'react-apollo';
import cookie from 'cookie'
import RaisedButton from 'material-ui/RaisedButton';

import { ToastContainer, toast} from 'react-toastify'
import { TOAST_STYLE } from '../../../utils/common'
import redirect from '../../../lib/auth/redirect'

import { LOGIN_USER_MUTATION } from '../../../lib/graphql/mutations'

const style = {
  margin: 12,
  color: 'white'
};

class LoginButton extends Component{

  onLoginCompleted = (data) => {
    // Store the token in cookie
    const { jwt, name, userType } = data.loginUser
    // toast(`Welcome Back ${name}!`, {...TOAST_STYLE.success});
    this.props.showLoginMessage(`Welcome Back ${name}!`)
    // console.log(`Welcome Back ${name}!`);
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
      redirect({}, target)
    })
  }

  onLoginError = (error) => {
    // If you want to send error to external service?
    console.log(error)
    // this.showLoginError()
    if (error.graphQLErrors.length==0)
      toast("Something Went Wrong With your request", {...TOAST_STYLE.fail});

    error.graphQLErrors.forEach(error=>{
      switch(error.message) {
        case `password incorrect`:
        this.props.showLoginError("Invalid email/password")
        // toast("Invalid email/password", {...TOAST_STYLE.fail});
        break;
        case `email/user not found`:
        this.props.showLoginError("Invalid email/password")
        // toast("Invalid email/password", {...TOAST_STYLE.fail});
        break;
        default:
        this.props.showLoginError("Something went wrong while contacting the server")
        // toast("Something Went Wrong", {...TOAST_STYLE.fail});
      }
    })
  }

  doLogin = (event, runMutation) => {
    const { username, password } = this.props;
    // console.log(`logging in user:${username}, password:${password}`);

    event.preventDefault()
    event.stopPropagation()

    if(this.props.usernameError.length < 1 ){
      runMutation({
        variables: {
          email: username,
          password: password
        }
      })
    } else {
      if (this.props.usernameError.length > 1) {
        this.props.showLoginError("enter a valid email address")
      }
      // if (!this.props.phone || !this.props.phoneValid) {
      //   this.setState({phoneValid: false})
      // }
      // if (!this.props.password) {
      //   this.setState({passwordValid: false})
      // }

      // toast("Your Inputs are not valid", {...TOAST_STYLE.fail});
    }

  }

  render(){
    return <Mutation mutation={LOGIN_USER_MUTATION}
      onCompleted={this.onLoginCompleted}
      onError={this.onLoginError}>
      {(loginUser, { data, error }) => (
        <RaisedButton
         label='Login'
         style={style}
         backgroundColor="#0c6053"
         labelColor="white"
         onClick={e=>this.doLogin(e, loginUser)}
       />
      )}
    </Mutation>
  }
}

export default withApollo(LoginButton)
