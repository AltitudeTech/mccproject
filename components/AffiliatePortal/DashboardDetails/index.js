import React, {Component, Fragment} from 'react';
import { Query } from 'react-apollo'
import moment from 'moment'

import { AffiliateDetailsContext } from '../../../contexts/AffiliateDetailsContext'

export default class CustomersTable extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }

    render(){
        return <Fragment>
          <AffiliateDetailsContext.Consumer>{
            ({ affiliate: { email, isActivated, isApproved, isActive, coupon } }) => <Fragment>
              <div>email: {email}</div>
              <div>isActivated: {isActivated ? 'true' : 'false'}</div>
              <div>isApproved: {isApproved ? 'true' : 'false'}</div>
              <div>isActive: {isActive ? 'true' : 'false'}</div>
              <div>coupon: {coupon ? coupon.coupon : 'Not yet assigned'}</div>
            </Fragment>
          }</AffiliateDetailsContext.Consumer>
        </Fragment>
    }
}
