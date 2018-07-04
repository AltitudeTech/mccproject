import React, {Component} from 'react';
// import Link from 'next/link'
import withCandidatePortal from '../../components/HOCS/candidate/withCandidatePortal'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { CandidatePaymentsWrapper, CandidatePaymentsContext } from '../../components/Context/CandidatePaymentsContext'


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
        };
    }


    handleChange = (event, index, value) => {
      this.setState({value});
    };
    render(){
        return <div className="profile-content">
          <div>
              <h2>Payment Portal</h2><hr/>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
          </div>
          <div className="col-md-6">
          <Card>
              <CardTitle title="MCC Test Code" subtitle="Career Intelligence" />
              <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat.
              </CardText>
              <CardActions>
              <SelectField
                  floatingLabelText="Select Currency"
                  value={this.state.value}
                  onChange={this.handleChange}
                  maxHeight={200}
                  style={styles.customWidth}
              >
                  <MenuItem value={null} primaryText="" />
                  <MenuItem value={"USD"} primaryText="USD" />
                  <MenuItem value={"POUNDS"} primaryText="POUNDS" />
                  <MenuItem value={"NAIRA"} primaryText="NAIRA" />
              </SelectField>

              <RaisedButton primary={true} label="Pay NOW" />

                  </CardActions>
                </Card>
              </div>
              <div className="col-md-6">
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
          </CandidatePaymentsWrapper>
        </div>
    }
}
export default withCandidatePortal(PaymentPage, {activePage: '/payment'})
