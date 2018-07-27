/**
* GraphQl Affiliate Queries
*/
import gql from 'graphql-tag'

export const AFFILIATE_ISAUTHENTICATED_QUERY = gql`
  query {
    affiliateIsAuthenticated
  }
`

export const HOME_VIEWER_AFFILIATE_QUERY = gql`
  query {
    viewerAffiliate {
      affiliate {
        _id
        name
        email
        isActivated
        isApproved
        isActive
        coupon {
          _id
          coupon
          discount
        }
      }
    }
  }
`

export const AFFILIATE_CUSTOMERS_PAGINATION_QUERY = gql`
  query ($page: Int, $perPage: Int){
    currentTime
    viewerAffiliate {
      affiliate {
        _id
        customerPayments (page: $page, perPage: $perPage, sort: CREATEDAT_DESC){
          items {
            _id
            amount
            transactionDate
            currency
          }
          pageInfo {
            currentPage
            perPage
            pageCount
            itemCount
            hasNextPage
            hasPreviousPage
          }
        }
      }
    }
  }
`
