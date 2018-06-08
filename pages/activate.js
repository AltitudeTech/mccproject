import { Component, Fragment } from 'react'
import Router from 'next/router'
import { Mutation, withApollo, compose } from 'react-apollo'

import withData from '../lib/backendApi/withData'
import { ACTIVATE_CANDIDATE_MUTATION } from '../lib/backendApi/mutations'

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

class ActivationPage extends Component {
  static async getInitialProps({query}) {
    return {
      code: query.code ? query.code : null
    }
  }
  constructor(props){
    super(props)
    this.state = {
      message: 'Activating Your Account'
    }
    this.onCompleted = this.onCompleted.bind(this)
    this.onError = this.onError.bind(this)
  }

  onCompleted = (data) => {
    // const {isActivated, name: {last}} = data.activateCandidate
    this.setState({message: `Congratulations, your account has been activated`})
    setTimeout(()=>Router.push('/?show=signIn'), 5*1000)
  }

  onError = (error) => {
    this.setState({message: `There was an issue activating your account reload the page to try again`})
    // console.log(error)
    // if (error.graphQLErrors.length==0)
    //   toast("Something Went Wrong With your request", {...TOAST_STYLE.fail});
    //
    // error.graphQLErrors.forEach(error=>{
    //   switch(error.message) {
    //     case `password incorrect`:
    //     toast("Incorrect Username/password", {...TOAST_STYLE.fail});
    //     break;
    //     case `phone/candidate not found`:
    //     toast("Incorrect Username/password", {...TOAST_STYLE.fail});
    //     break;
    //     default:
    //     toast("Something Went Wrong", {...TOAST_STYLE.fail});
    //   }
    // })
  }

  render(){
    const { code } = this.props;
    const { message } = this.state;
    return (
      <div>
        {code ? <Mutation mutation={ACTIVATE_CANDIDATE_MUTATION}
          onCompleted={this.onCompleted}
          onError={this.onError}>
          {(activateCandidate, {data, error}) => (
            <div>
              {message}
              <RunMutaion activateCandidate={activateCandidate} code={code}/>
            </div>
          )}
        </Mutation>
        :
        <div>404: no code supplied in query</div>
      }
      </div>
    );
  }
}

export default compose(
  // withData gives us server-side graphql queries before rendering
  withData,
  // withApollo exposes `this.props.client` used when logging out
  withApollo
)(ActivationPage)
