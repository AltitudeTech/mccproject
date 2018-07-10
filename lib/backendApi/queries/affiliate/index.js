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
        # isActivated
      }
    }
  }
`

// export const PAYMENT_PAGE_QUERY = gql`
//   query ViewerMccAffiliateQuery{
//     viewerMccAffiliate {
//       mccAffiliate {
//         _id
//         payments {
//           _id
//           paystackReference
//           createdAt
//           testCode {
//             _id
//             code
//           }
//         }
//       }
//     }
//   }
// `

export const AFFILIATE_CUSTOMERS_PAGINATION_QUERY = gql`
  query ($page: Int, $perPage: Int){
    currentTime
    viewerMccAffiliate {
      mccAffiliate {
        _id
        coupon {
          coupon
        }
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
