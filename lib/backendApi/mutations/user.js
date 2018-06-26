/**
* GraphQl Candidate Mutations
*/
import gql from 'graphql-tag'

export const LOGIN_USER_MUTATION = gql `
  mutation Login($email: String!, $password: String!) {
    loginUser ( email: $email, password: $password ) {
      jwt
      name{
        last
      }
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
