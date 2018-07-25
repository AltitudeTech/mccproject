/**
* GraphQl MccAffiliate Queries
*/
import gql from 'graphql-tag'

export const AFFILIATE_ISAUTHENTICATED_QUERY = gql`
  query {
    mccAffiliateIsAuthenticated
  }
`

export const HOME_VIEWER_AFFILIATE_QUERY = gql`
  query {
    viewerMccAffiliate {
      mccAffiliate {
        _id
        name
        email
        isActivated
        isApproved
        isActive
        coupon {
          _id
          coupon
        }
      }
    }
  }
`

export const AFFILIATE_CUSTOMERS_PAGINATION_QUERY = gql`
  query ($page: Int, $perPage: Int){
    currentTime
    viewerMccAffiliate {
      mccAffiliate {
        _id        
        customers (page: $page, perPage: $perPage, sort: CREATEDAT_DESC){
          items {
            _id
            name
            isActivated
            createdAt
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
