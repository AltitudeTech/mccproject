/**
* GraphQl institution Queries
*/
import gql from 'graphql-tag'

export const EMPLOYER_ISAUTHENTICATED_QUERY = gql`
  query {
    employerIsAuthenticated
  }
`

export const HOME_VIEWER_EMPLOYER_QUERY = gql`
  query {
    price {
      _id
      mccInstitutionPrice1
      mccInstitutionPrice2
      currency
      symbol
    }
    viewerEmployer {
      employer {
        _id
        name
        email
        isActivated
      }
    }
  }
`
export const EMPLOYER_PAYMENT_PAGE_QUERY = gql`
  query ViewerEmployerQuery{
    currentTime
    viewerEmployer {
      employer {
        _id
        payments(sort: CREATEDAT_DESC){
          _id
          paystackReference
          createdAt
          transactionDate
          amount
          currency
          noOfUses
        }
      }
    }
  }
`

export const FIND_COUPON_QUERY = gql`
  query($coupon: String!){
    findCoupon(coupon: $coupon){
      _id
      discount
    }
  }
`
