import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { withApollo, compose, Mutation } from 'react-apollo'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import redirect from '../../lib/auth/redirect'
import checkAffiliateLoggedIn from '../../lib/auth/checkAffiliateLoggedIn'

import cookie from 'cookie'
import { ToastContainer, toast } from 'react-toastify'
import { AffiliateDetailsWrapper, AffiliateDetailsContext } from '../../contexts/AffiliateDetailsContext'
import { SEND_ACTIVATION_LINK_AFFILIATE_MUTATION } from '../../lib/graphql/mutations'

import { TOAST_STYLE } from '../../utils/common'

import LeftNavigation from '../../components/AffiliatePortal/LeftNavigation'

export default function withLayout(Child, opts={}) {
  class WrappedComponent extends React.Component {
    static async getInitialProps(context) {
      let ChildProps = {};

      if (Child.getInitialProps) {
        ChildProps = await Child.getInitialProps(context)
      }

      //Validate loggedin user
      const {isAuthenticated} = await checkAffiliateLoggedIn(context.apolloClient)
      if (!isAuthenticated) {
        // If not signed in, send them somewhere more useful
        document.cookie = cookie.serialize('token', '', {
          maxAge: -1, // Expire the cookie immediately
          path: '/'
        })
        document.cookie = cookie.serialize('userType', '', {
          maxAge: -1, // Expire the cookie immediately
          path: '/'
        })
        // client.cache.reset().then(() => {
        //   redirect(context, target)
        // })
        let target = `/?show=signIn`
        redirect(context, target)
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
            {/* <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/> */}
            <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
            <link rel="stylesheet" href="/static/css/ReactToastify.min.css" />
            <link rel="stylesheet" href="/static/css/portal-style.css" />
            {/* <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script> */}
            {/* <script src="//code.jquery.com/jquery-1.11.1.min.js"></script> */}
          </Head>
          {/* <Child /> */}
          <AffiliateDetailsWrapper>
            <div className="app">
              <div className="app-body">
                <main className="main" style={{
                  paddingTop: '24px'
                }}>
                <div className="container">
                  <div className="row profile">
                    <AffiliateDetailsContext.Consumer>{
                      ({ affiliate: { isActivated } }) => {
                        if (!isActivated) {
                          return (
                            <div className="alert alert-danger" role="alert">
                              <strong>Warning!</strong> Your account has not been verified, please check your email to verify.
                              <Mutation mutation={SEND_ACTIVATION_LINK_AFFILIATE_MUTATION}
                                onCompleted={({affiliateResendActivationLink: {email}}) => {
                                  toast(`activation link was sent to ${email}`, {...TOAST_STYLE.success});
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
                    }</AffiliateDetailsContext.Consumer>
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
          </AffiliateDetailsWrapper>
        <ToastContainer />
      </MuiThemeProvider>
    )}
  }

  return (WrappedComponent)
}
