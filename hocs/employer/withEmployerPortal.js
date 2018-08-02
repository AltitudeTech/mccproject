import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { withApollo, compose, Mutation } from 'react-apollo'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import cookie from 'cookie'
import redirect from '../../lib/auth/redirect'
import checkEmployerLoggedIn from '../../lib/auth/checkEmployerLoggedIn'

import { ToastContainer } from 'react-toastify'
import { EmployerDetailsWrapper, EmployerDetailsContext } from '../../contexts/EmployerDetailsContext'
import { SEND_ACTIVATION_LINK_EMPLOYER_MUTATION } from '../../lib/graphql/mutations'

import LeftNavigation from '../../components/EmployerPortal/LeftNavigation'

export default function withLayout(Child, opts={}) {
  class WrappedComponent extends React.Component {
    static async getInitialProps(context) {
      let ChildProps = {};

      if (Child.getInitialProps) {
        ChildProps = await Child.getInitialProps(context)
      }

      //Validate loggedin user
      const {isAuthenticated} = await checkEmployerLoggedIn(context.apolloClient)
      if (!isAuthenticated) {
        if (process.browser) {
          document.cookie = cookie.serialize('token', '', {
            maxAge: -1, // Expire the cookie immediately
            path: '/'
          })
          document.cookie = cookie.serialize('userType', '', {
            maxAge: -1, // Expire the cookie immediately
            path: '/'
          })
        }
        // If not signed in, send them somewhere more useful
        redirect(context, `/?show=signIn`)
      }

      return {
        ...ChildProps,
        isAuthenticated
      }
    }

    render() {
      const { isAuthenticated } = this.props;
      if (!isAuthenticated) {
        Router.push('/');
      }
      // console.log(opts);
      const { activePage } = opts;
      return (
        <MuiThemeProvider>
          <Head>
            <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta charSet="utf-8"/>
            {/* <link rel="icon" href="wt_62309/images/favicon.ico" type="image/x-icon"/> */}
            {/* <!-- Stylesheets--> */}
            {/* <link rel="stylesheet" href="/static/css/portal/style.css"/> */}
            <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
            <link rel="stylesheet" href="/static/css/portal-style.css" />
          </Head>
          <EmployerDetailsWrapper>
            <div className="app">
              <div className="app-body">
                <main className="main" style={{
                  paddingTop: '24px'
                }}>
                <div className="container">
                  <div className="row profile">
                    <EmployerDetailsContext.Consumer>{
                      ({ employer: { isActivated } }) => {
                        if (!isActivated) {
                          return (
                            <div className="alert alert-danger" role="alert">
                              <strong>Warning!</strong> Your account has not been verified, please check your email to verify.
                              <Mutation mutation={SEND_ACTIVATION_LINK_EMPLOYER_MUTATION}
                                onCompleted={({employerResendActivationLink: {email}}) => {
                                  console.log(`activation link was sent to ${email}`)
                                }}
                                onError={(error) => {
                                  console.log(error)
                                }}>{
                                  (doMutation, { data }) => <small className="resend-mail">
                                    Can't find the email? <a href="#" onClick={e=>{
                                      e.preventDefault();
                                      e.stopPropagation();
                                      doMutation();
                                    }}>click here</a> to resend
                                  </small>
                                }</Mutation>
                            </div>
                          )
                        }
                      }
                    }</EmployerDetailsContext.Consumer>
                      <div className="col-md-3">
                          <LeftNavigation activePage={activePage}/>
                      </div>
                      <div className="col-md-9">
                        <Child />
                      </div>
                    </div>
                  </div>
              </main>
            </div>
          </div>
        </EmployerDetailsWrapper>
        <ToastContainer />
      </MuiThemeProvider>
    )}
  }

  return (WrappedComponent)
}
