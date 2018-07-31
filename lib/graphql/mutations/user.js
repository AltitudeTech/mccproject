/**
* GraphQl Candidate Mutations
*/
import gql from 'graphql-tag'

export const LOGIN_USER_MUTATION = gql `
  mutation Login($email: String!, $password: String!) {
    loginUser ( email: $email, password: $password ) {
      jwt
      userType
      name
    }
  }
`

export const ACTIVATE_USER_ACCOUNT_MUTATION = gql `
  mutation ($code: String!){
    userActivateAccount(code: $code) {
      isActivated
      jwt
      userType
      name
    }
  }
`

export const CREATE_ENQUIRY_MUTATION = gql `
  mutation ($email: String!, $name: String!, $message: String!) {
    createEnquiry ( record: {email: $email, name: $name, message: $message} ) {
      recordId
    }
  }
`

export const NEWSLETTER_SUBSCRIPTION_MUTATION = gql `
  mutation ($address: String!) {
    subscribeToMccNewsletter ( address: $address ) {
      address
    }
  }
`

export const SEND_RESET_PASSWORD_MUTATION = gql `
  mutation ($email: String!) {
    userSendPasswordResetLink(email: $email){
      status
      email
    }
  }
`

export const USER_CHANGE_PASSWORD_MUTATION = gql `
  mutation ($code: String!, $password: String!) {
    userResetPassword(code: $code, newPassword: $password){
      jwt
      name
      userType
    }
  }
`
