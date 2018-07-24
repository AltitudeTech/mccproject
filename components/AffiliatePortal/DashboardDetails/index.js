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
              <div><i className="glyphicon glyphicon-envelope"></i> {email}</div>
              <div>
                {isApproved ?
                  <i className="glyphicon glyphicon-ok"></i> :
                  <i className="glyphicon glyphicon-remove"></i>
                }
                &nbsp;required documents have {!isApproved && 'not'} been verified
              </div>
              <div>
                {isActive ?
                  <i className="glyphicon glyphicon-ok"></i> :
                  <i className="glyphicon glyphicon-remove"></i>
                }
                &nbsp;Signed T&C's has {!isActive && 'not'} been verified
              </div>
              <div>Coupon Code: {isActive ? (coupon ? coupon.coupon : <a>Create your coupon</a>) : 'Your account is not yet active please complete the verification procedures'}</div>
              <br/>
            </Fragment>
          }</AffiliateDetailsContext.Consumer>
        </Fragment>
    }
}
