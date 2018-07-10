import React, {Component, Fragment} from 'react';
// import Head from 'next/head'
// import Link from 'next/link'
import { Query } from 'react-apollo'
import moment from 'moment'

// import { AffiliateDetailsContext } from '../Context/AffiliateDetailsContext'
import { Table } from 'react-bootstrap'
import Pagination from "react-js-pagination"

import { AFFILIATE_CUSTOMERS_PAGINATION_QUERY } from '../../../lib/backendApi/queries'

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
          <Query query={AFFILIATE_CUSTOMERS_PAGINATION_QUERY}
            variables={{ page: this.state.currentPage, perPage: this.state.perPage }}>
            {({loading, error, data}) => {
              if (loading)
                return <p>loading...</p>;
                // return <Loading />;
              if (error)
                return `Error! ${error.message}`;

              const {viewerMccAffiliate: { mccAffiliate : { customers, coupon: {coupon} } }, currentTime } = data;
              return <Fragment>
                <div>Coupon Code: {coupon}</div>
                <div>
                  showing
                  <b>
                    {` ${!customers.pageInfo.hasPreviousPage ? 1 : (1+(customers.pageInfo.currentPage-1)*customers.pageInfo.perPage)}
                    -
                    ${!customers.pageInfo.hasNextPage ? customers.pageInfo.itemCount : (customers.pageInfo.perPage+(customers.pageInfo.currentPage-1)*customers.pageInfo.perPage)} `}
                  </b>
                  of
                  <b> {customers.pageInfo.itemCount}</b> Customers
                </div>
                <br/>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Account verified</th>
                      <th>Day joined</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.items.map((customer, index)=>(
                      <tr>
                        <td>{index+1}</td>
                        <td>{customer.name}</td>
                        <td>{customer.isActivated? 'Yes' : 'No'}</td>
                        <td>{`${moment(customer.createdAt).from(currentTime)} <${moment(customer.createdAt).format('MMMM Do YYYY')}>`}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <div className="pagination-wrapper">
                  <Pagination
                    activePage={this.state.currentPage}
                    itemsCountPerPage={customers.pageInfo.perPage}
                    totalItemsCount={customers.pageInfo.itemCount}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                  />
                </div>
                <style jsx>{`
                  .pagination-wrapper {
                    margin: auto;
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
