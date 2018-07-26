import React, {Component, Fragment} from 'react';
// import Link from 'next/link'
import withCandidatePortal from '../../hocs/candidate/withCandidatePortal'

import PaymentButton from '../../components/CandidatePortal/PaymentButton'

import Checkbox from 'material-ui/Checkbox';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
// import SelectField from 'material-ui/SelectField';
// import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

import { CandidatePaymentsWrapper, CandidatePaymentsContext } from '../../contexts/CandidatePaymentsContext'
import { CandidateDetailsContext } from '../../contexts/CandidateDetailsContext'


const styles = {
  customWidth: {
    width: 150,
  },
};

class PaymentPage extends Component{
    constructor(props){
        super(props)

        this.state = {
          value: 10,
          // email: 'bellooladipupo41@gmail.com',
          // amount: 100*100, // equals 100NGN
          coupon: '',
          checked: false
        };
    }

    updateCheck() {
      this.setState((oldState) => {
        return {
          checked: !oldState.checked,
        };
      });
    }


    handleChange = (event, index, value) => {
      this.setState({value});
    };
    render(){
        return <div className="profile-content">
          <CandidatePaymentsWrapper>
            <CandidateDetailsContext.Consumer>{({price, candidate})=>{
              const payPrice = price.mccPrice*100 //convert to kobo for payStack
              const displayPrice = `${price.symbol}${price.mccPrice}${price.symbol ? '' : price.currency}`
              const cancelPrice = `${price.symbol}${price.mccPrice*2}${price.symbol ? '' : price.currency}`
              return (<Fragment>
              <div>
                <h2>Payment Page</h2><hr/>
                <p>
                  The unit price for MCC test code is {displayPrice}. You may opt for other optional
                  services on the MCC platform such as the 1 hour telephone or video
                  from our dedicated career coaches. Career Coach Service on this
                  platform is only available to those who have purchased the MCC test
                  code. <br/>We currently do NOT have facilities to handle cash payments. You
                  cannot make a payment without prior registration on the MCC
                  platform. You are bound by the “Terms of Use” of MCC. You will
                  receive an online receipt, acknowledgement and your MCC test code
                  once your payment is received.
                </p>
              </div>
              <div className="row" style={{margin: 'auto'}}>
                <div style={{margin: 'auto', background: 'rgba(255,242,0,0.2)'}}>
                  <CardTitle title="Purchase My Career Choice Test Code" subtitle="A service of Career Intelligence" />
                  <div className="row" style={{padding : '0px'}}>
                    <div className="col-md-6" style={{textAlign: 'center'}}>
                      <img src="/static/images/product.jpg" style={{width:"80%", border:'1px solid #b2b2b2', margin: 'auto' }} />
                    </div>
                    <div className="col-md-6">
                      <CardText>
                        <h3>MCC Test Code</h3>
                        <span className="subtitle" style={{textDecoration:'italics'}}>Know the career that suits your personality in 15 minutes for </span>
                        <span style={{letterSpacing:'2px', color:'#b2b2b2', textDecoration:'line-through', fontSize: '1.5em'}}>{cancelPrice}</span>
                        <span style={{letterSpacing:'2px', fontWeight:'bold', fontSize: '1.5em'}}>{displayPrice}</span>
                        <br/>
                        <TextField
                          hintText="Coupon Code (if available)"
                          onChange={e=>this.setState({coupon: e.target.value})}
                        />
                        <Checkbox
                          label={<span>Agree to our <a href="/faq">terms and conditions</a></span>}
                          checked={this.state.checked}
                          onCheck={this.updateCheck.bind(this)}
                          style={styles.checkbox}
                        />
                        <PaymentButton
                          coupon={this.state.coupon}
                          email={candidate.email}
                          amount={payPrice}
                          priceId={price._id}
                          disabled={!this.state.checked}/>
                        </CardText>
                      </div>
                    </div>
                  </div>
                </div>
                <CandidatePaymentsContext.Consumer>{
                  ({ payments }) => <Fragment>
                  <div>
                    <h3>Payment History</h3><hr/>
                    {payments.map(payment=>(
                      <p>
                        {payment.paystackReference} - {payment.testCode && payment.testCode.code} - {payment.createdAt}
                      </p>
                    ))}
                  </div>
                </Fragment>
              }</CandidatePaymentsContext.Consumer>
              </Fragment>
            )}}</CandidateDetailsContext.Consumer>
          </CandidatePaymentsWrapper>
          <style jsx>{`
            span{
              display : block ;
            }
            span.subtitle{
              font-size: 14px;
              color: rgba(0, 0, 0, 0.541176);
              display: block;
            }
        `}</style>
        </div>
    }
}
export default withCandidatePortal(PaymentPage, {activePage: '/payment'})
