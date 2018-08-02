import React, {Component, Fragment} from 'react';
// import Link from 'next/link'
import withEmployerPortal from '../../hocs/employer/withEmployerPortal'

import PaymentButton from '../../components/EmployerPortal/PaymentButton'

import Checkbox from 'material-ui/Checkbox';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
// import SelectField from 'material-ui/SelectField';
// import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

import { EmployerDetailsContext } from '../../contexts/EmployerDetailsContext'


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
          uses: 1,
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
      const { uses } = this.state;
        return <div className="profile-content">
          {/* <EmployerPaymentsWrapper> */}
            <EmployerDetailsContext.Consumer>{({price, employer})=>{
              const displayPrice = `${price.symbol}${price.mccInstitutionPrice1}${price.symbol ? '' : price.currency}`
              const displayPrice1 = `${price.symbol}${price.mccInstitutionPrice1}${price.symbol ? '' : price.currency}`
              const displayPrice2 = `${price.symbol}${price.mccInstitutionPrice2}${price.symbol ? '' : price.currency}`
              const toPayPrice = (uses < 501) ? price.mccInstitutionPrice1*uses : price.mccInstitutionPrice2*uses;
              const displayToPayPrice = `${price.symbol}${toPayPrice}${price.symbol ? '' : price.currency}`
              const payPrice = toPayPrice*100 //convert to kobo for payStack
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
                      <div className="row">
                        <div className="col-md-6" style={{textAlign: 'center'}}>
                          <img src="/static/images/institution.svg" style={{width:"90%", margin: 'auto' }} />
                        </div>
                        <div className="col-md-6" style={{textAlign: 'center'}}>
                          1 - 500 uses<br/>{displayPrice1}/candidate
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6" style={{textAlign: 'center'}}>
                          <img src="/static/images/institution.svg" style={{width:"90%", margin: 'auto' }} />
                        </div>
                        <div className="col-md-6" style={{textAlign: 'center'}}>
                          501 and above uses<br/>{displayPrice2}/candidate
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <CardText>
                        <h3>MCC Test Code</h3>
                        <span className="subtitle" style={{textDecoration:'italics'}}>Know the career that suits your candidates personality in 15 minutes </span>
                        <TextField
                          floatingLabelText="No. of uses"
                          // hintText="No. of uses"
                          value={uses}
                          onChange={e=>{
                            this.setState({uses: e.target.value.replace(/\D/g,'')})
                            // const lastChar = e.target.value[e.target.value.length -1];
                            // if (!isNaN(lastChar) && lastChar != '.')
                          }}
                          // type="number"
                          min="1"
                        />
                        <span style={{letterSpacing:'2px', fontWeight:'bold', fontSize: '1.5em'}}>
                          {displayToPayPrice}
                        </span>
                        <TextField
                          hintText="Coupon Code (if available)"
                          onChange={e=>this.setState({coupon: e.target.value})}
                        />
                        <Checkbox
                          label={<span>Agree to our <a href="/faq" target="_blank">terms and conditions</a></span>}
                          checked={this.state.checked}
                          onCheck={this.updateCheck.bind(this)}
                          style={styles.checkbox}
                        />
                        <PaymentButton
                          coupon={this.state.coupon}
                          uses={uses}
                          email={employer.email}
                          amount={payPrice}
                          priceId={price._id}
                          disabled={!this.state.checked}/>
                        </CardText>
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            )}}</EmployerDetailsContext.Consumer>
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
export default withEmployerPortal(PaymentPage, {activePage: '/payment'})
