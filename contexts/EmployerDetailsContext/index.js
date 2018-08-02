import React, { Component, Fragment } from 'react'
import { Query } from 'react-apollo'
import { HOME_VIEWER_EMPLOYER_QUERY } from '../../lib/graphql/queries'

import { loaderStyles } from '../../utils/styles'

export {
  EmployerDetailsContext,
  EmployerDetailsWrapper
}

const EmployerDetailsContext = React.createContext({
  user: {}
});

class EmployerDetailsWrapper extends Component {
  constructor(props){
    super(props)
    // this.toggleModal= this.toggleModal.bind(this);

    this.state = {
      user: {}
    };
  }

  render() {
    return <Query query={HOME_VIEWER_EMPLOYER_QUERY}>
      {({loading, error, data}) => {
        if (loading)
          return <Fragment>
            <div className="loader"></div>
            <style jsx>{`${loaderStyles}`}</style>
          </Fragment>;
        if (error) {
          console.log(error);
          return `There was an error contacting the server`;
        }

        const { viewerEmployer: { employer }, price } = data;
        // console.log(employer);
        return (
          <EmployerDetailsContext.Provider value={{ employer, price }}>
            {this.props.children}
          </EmployerDetailsContext.Provider>
        )
        }}
      </Query>
  }
}
