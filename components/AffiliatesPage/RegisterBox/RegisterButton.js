import { Component } from 'react'
import { Mutation, withApollo } from 'react-apollo';
import cookie from 'cookie'
import RaisedButton from 'material-ui/RaisedButton';

import { ToastContainer, toast} from 'react-toastify'
import { TOAST_STYLE } from '../../../utils/common'
import redirect from '../../../lib/auth/redirect'

import { SIGNUP_AFFILIATE_MUTATION } from '../../../lib/graphql/mutations'

const style = {
  margin: 12,
};

export default withApollo(
  class RegisterButton extends Component{

    onsignUpCompleted = (data) => {
      document.cookie = cookie.serialize('userType', 'Affiliate', {
        maxAge: 30 * 24 * 60 * 60 // 30 days
      })

      // Store the token in cookie
      const {jwt, name} = data.affiliateCreateAccount;
      // toast(`Welcome Back ${last}!`, {...TOAST_STYLE.success});
      console.log(`Welcome Back ${name}!`);
      this.props.showRegisterMessage(`Welcome ${name}!`)
      document.cookie = cookie.serialize('token', jwt, {
        maxAge: 30 * 24 * 60 * 60 // 30 days
      })
      // Force a reload of all the current queries now that the user is
      // logged in
      this.props.client.resetStore().then(() => {
        redirect({}, `/affiliate/dashboard`)
      })
    }

    onsignUpError = (error) => {
      // If you want to send error to external service?
      console.log(error)
      if (error.graphQLErrors.length==0)
        this.props.showRegisterError("Something went wrong while contacting the server")
        // toast("Something Went Wrong With your request", {...TOAST_STYLE.fail});

      error.graphQLErrors.forEach(error=>{
        switch(error.message) {
          case `password incorrect`:
          this.props.showRegisterError("Incorrect username/password")
          // toast("Incorrect username/password", {...TOAST_STYLE.fail});
          break;
          case `email/user not found`:
          this.props.showRegisterError("Incorrect username/password")
          // toast("Incorrect username/password", {...TOAST_STYLE.fail});
          break;
          case `Email already exists`:
          this.props.showRegisterError("A user with this email already exists on career intelligence database")
          // toast("Incorrect username/password", {...TOAST_STYLE.fail});
          break;
          default:
          this.props.showRegisterError("Something went wrong while contacting the server")
          // toast("Something Went Wrong", {...TOAST_STYLE.fail});
        }
      })
    }

    dosignUp = (event, runMutation) => {
      event.preventDefault()
      event.stopPropagation()

      const {
        name,
        phone,
        email,
        password,
        ConfirmPassword,
        workAddress,
        physicalAddress,
        referee1name,
        referee1phone,
        referee2name,
        referee2phone
      } = this.props;

      const variables={
        name,
        phone,
        email,
        password,
        workAddress,
        physicalAddress,
        referee1name,
        referee1phone,
        referee2name,
        referee2phone
      }
      console.log(variables);

      if(password == ConfirmPassword ){
        runMutation({
          variables
        })
      } else {
        if (password != ConfirmPassword) {
          this.props.showRegisterError("supplied passwords do not match");
        }
      //   if (!this.props.phone || !this.props.phoneValid) {
      //     this.setState({phoneValid: false})
      //   }
      //   if (!this.props.password) {
      //     this.setState({passwordValid: false})
      //   }
      //
      //   toast("Your Inputs are not valid", {...TOAST_STYLE.fail});
      }

    }

    render(){
      return <Mutation mutation={SIGNUP_AFFILIATE_MUTATION}
        onCompleted={this.onsignUpCompleted}
        onError={this.onsignUpError}>
        {(doMutation) => (
            <RaisedButton
            label='Register'
            backgroundColor="#0c6053"
            labelColor="white"
            onClick={e=>this.dosignUp(e, doMutation)}
          />
        )}
      </Mutation>
    }
  }
)
