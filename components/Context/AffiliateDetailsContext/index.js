import React, { Component, Fragment } from 'react'
import { Query } from 'react-apollo'
import { HOME_VIEWER_AFFILIATE_QUERY } from '../../../lib/backendApi/queries'

import { loaderStyles } from '../../../utils/styles'

export {
  AffiliateDetailsContext,
  AffiliateDetailsWrapper
}

const AffiliateDetailsContext = React.createContext({
  user: {}
});

class AffiliateDetailsWrapper extends Component {
  constructor(props){
    super(props)
    // this.toggleModal= this.toggleModal.bind(this);

    this.state = {
      user: {}
    };
  }

  render() {
    return <Query query={HOME_VIEWER_AFFILIATE_QUERY}>
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

        const { viewerMccAffiliate: { mccAffiliate } } = data;
        // console.log(affiliate);
        return (
          <AffiliateDetailsContext.Provider value={{affiliate: mccAffiliate}}>
            {this.props.children}
          </AffiliateDetailsContext.Provider>
        )
        }}
      </Query>
  }
}
