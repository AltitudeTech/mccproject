import React, {Component, Fragment} from 'react';
// import Head from 'next/head'
// import Link from 'next/link'
import { Query } from 'react-apollo'
import moment from 'moment'

import { Table } from 'react-bootstrap'
import Pagination from 'react-js-pagination'

import { AffiliateDetailsContext } from '../../../contexts/AffiliateDetailsContext'


import { AFFILIATE_CUSTOMERS_PAGINATION_QUERY } from '../../../lib/graphql/queries'

const EmptySpace = props => (
  <p className="display-4" style={{padding: '10px 0px 10px'}}>
    <i className="icon-ghost"></i> This space is lonely
  </p>
)

export default class CustomersTable extends Component{
  constructor(props){
    super(props)
    this.handlePageChange = this.handlePageChange.bind(this)
    this.state = {
      currentPage: 1,
      perPage: 10,
      modalOpen: false,
      isSearch: false
    }
  }

  handlePageChange(pageNumber) {
    this.setState({currentPage: pageNumber});
  }

    render(){
        return <Fragment>
          <AffiliateDetailsContext.Consumer>{
            ({ affiliate: {coupon } }) => (
              <div>Coupon Code: {coupon ? coupon.coupon : 'No coupon assigned'}</div>
            )
          }</AffiliateDetailsContext.Consumer>
          <Query query={AFFILIATE_CUSTOMERS_PAGINATION_QUERY}
            fetchPolicy='cache-and-network'
            variables={{ page: this.state.currentPage, perPage: this.state.perPage }}>
            {({loading, error, data}) => {
              if (loading)
                return <p>loading...</p>;
                // return <Loading />;
              if (error)
                return `Error! ${error.message}`;

              const {viewerMccAffiliate: { mccAffiliate : { customerPayments } }, currentTime } = data;
              return <Fragment>
                <div>
                  showing
                  <b>
                    {` ${!customerPayments.pageInfo.hasPreviousPage ? 1 : (1+(customerPayments.pageInfo.currentPage-1)*customerPayments.pageInfo.perPage)}
                    -
                    ${!customerPayments.pageInfo.hasNextPage ? customerPayments.pageInfo.itemCount : (customerPayments.pageInfo.perPage+(customerPayments.pageInfo.currentPage-1)*customerPayments.pageInfo.perPage)} `}
                  </b>
                  of
                  <b> {customerPayments.pageInfo.itemCount}</b> Customer purchases with your coupon
                </div>
                <br/>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Amount</th>
                      <th>Currency</th>
                      <th>Payment date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customerPayments.items.map((payment, index)=>(
                      <tr>
                        <td>{index+1}</td>
                        <td>{payment.amount || 'Not available'}</td>
                        <td>{payment.currency || 'Not available'}</td>
                        <td>{payment.transactionDate ?
                          `${moment(payment.createdAt).from(currentTime)} <${moment(payment.createdAt).format('MMMM Do YYYY')}>`
                          :
                          `not available`
                        }</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <div className="pagination-wrapper">
                  <Pagination
                    activePage={this.state.currentPage}
                    itemsCountPerPage={customerPayments.pageInfo.perPage}
                    totalItemsCount={customerPayments.pageInfo.itemCount}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                  />
                </div>
                <style jsx>{`
                  .pagination-wrapper {
                    margin: auto;
                    display: table;
                  }
                `}</style>
              </Fragment>
            }}
          </Query>
          {/* <Table responsive hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
            </tbody>
          </Table> */}
        </Fragment>
    }
}
