import React, {Component, Fragment} from 'react';
// import Link from 'next/link'
import withCandidatePortal from '../../hocs/candidate/withCandidatePortal'
import moment from 'moment'

import { Table } from 'react-bootstrap'
import { CandidatePaymentsWrapper, CandidatePaymentsContext } from '../../contexts/CandidatePaymentsContext'

class History extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className="profile-content">
          <div>
              <h2>Payment History</h2><hr/>
              {/* <p>
                You should receive your 16 digit MCC test code in your e-mail inbox
                folder immediately after your payment has been received. The test
                code is unique to yourself alone and cannot be used twice and should
                not be revealed to third party. You are bound by the “Terms of Use” for
                MCC and its partner.
              </p>
              <p>
                You will have to make a FRESH payment, if you
                require replacement code because, your original code has been
                misplaced or destroyed. Please follow the instructions in your test code
                letter to complete the MCC test.
              </p> */}
              <CandidatePaymentsWrapper>
                <CandidatePaymentsContext.Consumer>{
                  ({ payments, currentTime }) => <Fragment>
                    <Table responsive hover>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Test Code</th>
                          <th>Reference</th>
                          {/* <th>Amount</th> */}
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {payments.map((payment, index)=>(
                          <tr>
                            <td>{index+1}</td>
                            <td>{payment.testCode ? payment.testCode.code : 'Not available'}</td>
                            <td>{payment.paystackReference || 'Not available'}</td>
                            <td>{payment.transactionDate ?
                              `${moment(payment.createdAt).format('MMMM Do YYYY')}`
                              :
                              `not available`
                            }</td>
                          </tr>
                        ))}
                        </tbody>
                      </Table>
                  </Fragment>
                }</CandidatePaymentsContext.Consumer>
              </CandidatePaymentsWrapper>
          </div>
        </div>
    }
}
export default withCandidatePortal(History, {activePage: '/history'})
