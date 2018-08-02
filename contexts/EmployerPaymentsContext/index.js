import React, { Component, Fragment } from 'react'
import { Query } from 'react-apollo'
import { EMPLOYER_PAYMENT_PAGE_QUERY } from '../../lib/graphql/queries'

import { loaderStyles } from '../../utils/styles'

export {
  EmployerPaymentsContext,
  EmployerPaymentsWrapper
}

const EmployerPaymentsContext = React.createContext({
  payments: []
});

class EmployerPaymentsWrapper extends Component {
  constructor(props){
    super(props)
    // this.toggleModal= this.toggleModal.bind(this);

    this.state = {
      user: {}
    };
  }

  render() {
    return <Query query={EMPLOYER_PAYMENT_PAGE_QUERY}
      fetchPolicy="cache-and-network">
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

        const { viewerEmployer: { employer: { payments } }, currentTime } = data;
        // console.log(employer);
        return (
          <EmployerPaymentsContext.Provider value={{payments, currentTime}}>
            {this.props.children}
          </EmployerPaymentsContext.Provider>
        )
      }}
      </Query>
  }
}
