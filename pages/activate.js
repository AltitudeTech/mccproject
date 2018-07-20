import { Component, Fragment } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { Mutation, withApollo, compose } from 'react-apollo'

import { ACTIVATE_CANDIDATE_MUTATION } from '../lib/graphql/mutations'
import LoadingSpinner from '../components/Activatepage/LoadingSpinner'
// import CompletedAnimation from '../components/Activatepage/CompletedAnimation'

class RunMutaion extends Component {
  componentDidMount(){
    const { code } = this.props;
    if (code) {
      this.props.activateCandidate({
        variables: {
          code: this.props.code
        }
      });
    }
  }

  render(){
    return null
  }
}

// const CompletedAnimation = () => <img src="/static/images/ani/loadingAnimation.svg"/>

class ActivationPage extends Component {
  static async getInitialProps({query}) {
    return {
      code: query.code ? query.code : null
    }
  }
  constructor(props){
    super(props)
    this.state = {
      defaultMessage: 'Activating Your Account',
      errorMessage: '',
      successMessage: ''
    }
    this.onCompleted = this.onCompleted.bind(this)
    this.onError = this.onError.bind(this)
  }

  onCompleted = (data) => {
    // const {isActivated, name: {last}} = data.activateCandidate
    this.setState({
      successMessage: `Congratulations, your account has been activated`,
      errorMessage: '',
      defaultMessage: ''
    })
    setTimeout(()=>Router.push('/?show=signIn'), 5*1000)
  }

  onError = (error) => {
    console.log(error);
    this.setState({
      errorMessage: `There was an issue activating your account try again later`,
      defaultMessage: ''
    })
    if (error.graphQLErrors.length==0)
      this.setState({errorMessage: `There was an issue activating your account try again later`})

    error.graphQLErrors.forEach(error=>{
      switch(error.message) {
        case `expired token`:
        this.setState({errorMessage: `This token has expired, request a new one from your MCC portal`})
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

  render(){
    const { code } = this.props;
    const { errorMessage, successMessage, defaultMessage } = this.state;
    return (
      <Fragment>
        <Head>
          <link href="/static/css/nunito.css" rel="stylesheet"/>
        </Head>
        <div className="activate-wrapper">
          {/* <img src="/static/images/ani/loadingAnimation.svg"/> */}
          <br/>
          <img className="mcc-logo" src="/static/images/mcc-logo.svg" />
          {code ? <Mutation mutation={ACTIVATE_CANDIDATE_MUTATION}
            onCompleted={this.onCompleted}
            onError={this.onError}>
            {(activateCandidate, {data, error, loading}) => (
              <div>
                {loading && <LoadingSpinner />}
                {defaultMessage && <h3 className="text-content">
                  {defaultMessage}
                </h3>}
                {errorMessage && <h3 className="text-content error-text">
                  <img className="error-icon" src="/static/images/cancel.svg"/> {errorMessage}
                </h3>}
                {successMessage && <div>
                  <h3 className="text-content success-text">
                    <img src="/static/images/ani/loadingAnimation.svg"/>
                    {successMessage}
                  </h3>
                </div>}
                <RunMutaion activateCandidate={activateCandidate} code={code}/>
              </div>
            )}
          </Mutation>
          :
          <h3 className="text-content error-text"><img className="error-icon" src="/static/images/cancel.svg"/> No code supplied</h3>
        }
        <style jsx>{`
          .error-icon {
            width: 28px;
            vertical-align: text-top;
          }

          .mcc-logo {
            width: 60%;
          }
          @media (max-width: 615px){
            .mcc-logo {
              width: 90%;
            }
            .text-content{
              font-size: 1.1em !important;
            }
          }
          .activate-wrapper {
            text-align: center;
            width: 100%;
            height: 50%;

            position: absolute;
            top:0;
            bottom: 0;
            left: 0;
            right: 0;

            margin: auto;
          }
          // .error-text {
          //   color: #ff5722;
          // }
          .success-text {
            color: #0c6053;
          }
          .text-content{
            font-size: 1.4em;
            text-transform: capitalize;
            font-family: "Nunito", serif;
            font-weight: 700;
            // line-height: 1.1;
          }
          `}</style>
        </div>
      </Fragment>
    );
  }
}

export default ActivationPage
