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
      }
    }
  }
`

export const PAYMENT_PAGE_QUERY = gql`
  query ViewerAffiliateQuery{
    viewerAffiliate {
      affiliate {
        _id
        payments {
          _id
          paystackReference
          createdAt
          testCode {
            _id
            code
          }
        }
      }
    }
  }
`
//
// export const PROFILE_VIEWER_AFFILIATE_QUERY = gql`
//   query ViewerAffiliateQuery{
//     viewerAffiliate {
//       affiliate {
//         _id
//         name {
//           first
//           last
//         }
//         phone
//         email
//         username
//         address
//         stateOfResidence
//         nationality
//         gender
//         stateOfOrigin
//         dateOfBirth
//         placeOfBirth
//       }
//     }
//   }
// `
// export const VIEWER_AFFILIATE_EXPERIENCE_QUERY = gql`
//   query ViewerAffiliateQuery{
//     viewerAffiliate {
//       affiliate {
//         _id
//         experience{
//          _id
//          companyName
//          role
//          fromYear
//          fromMonth
//          toYear
//          toMonth
//          startDate
//          endDate
//          address
//          state
//          salary
//          duration
//          isWorkingHere
//         }
//       }
//     }
//   }
// `
//
// export const VIEWER_AFFILIATE_EDUCATION_QUERY = gql`
//   query ViewerAffiliateQuery{
//     viewerAffiliate {
//       affiliate {
//         _id
//         education {
//           _id
//           school
//           degree
//           field
//           grade
//           fromYear
//           isSchoolingHere
//           toYear
//           startDate
//           duration
//         }
//       }
//     }
//   }
// `
//
// export const VIEWER_AFFILIATE_CERTIFICATES_QUERY = gql`
//   query ViewerAffiliateQuery{
//     viewerAffiliate {
//       affiliate {
//         _id
//         certificates{
//           _id
//           name
//           authority
//           licenseNumber
//           url
//           fromMonth
//           fromYear
//           doesNotExpire
//           toMonth
//           toYear
//           duration
//           startDate
//         }
//       }
//     }
//   }
// `
//
// export const VIEWER_AFFILIATE_REFEREES_QUERY = gql`
// query ViewerAffiliateQuery{
//   viewerAffiliate {
//     affiliate {
//       _id
//       referees{
//         _id
//         name {
//           first
//           last
//         }
//         phone
//         gender
//         email
//         occupation
//         relationship
//         isVerified
//       }
//     }
//   }
// }
// `
