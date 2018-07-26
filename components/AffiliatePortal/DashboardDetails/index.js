import React, {Component, Fragment} from 'react';
import { Query } from 'react-apollo'
import moment from 'moment'

import { AffiliateDetailsContext } from '../../../contexts/AffiliateDetailsContext'
import CouponModal from './CouponModal'

export default class CustomersTable extends Component{
  constructor(props){
    super(props)
    this.setModalOpen = this.setModalOpen.bind(this);
    this.state = {
      modalOpen: false
    }
  }

  setModalOpen(modalOpen){
    this.setState({modalOpen})
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
            <div>
              Coupon Code: <span style={{fontWeight: 600}}>
              {isActive ? (
                coupon ?
                coupon.coupon :
                <a onClick={(e)=>this.setModalOpen(true)}>Create your coupon</a>
              )
              :
              'Your account is not yet active please complete the verification procedures'}
              </span>
            </div>
            {coupon && <div>Coupon discount: {coupon.discount ? `${coupon.discount} % off`: 'not applicable'}</div>}
            <CouponModal isOpen={this.state.modalOpen} setModalOpen={this.setModalOpen}/>
            <br/>
          </Fragment>
        }</AffiliateDetailsContext.Consumer>
      </Fragment>
  }
}
