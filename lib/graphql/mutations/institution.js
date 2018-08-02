/**
* GraphQl Candidate Mutations
*/
import gql from 'graphql-tag'

export const SEND_ACTIVATION_LINK_EMPLOYER_MUTATION = gql `
  mutation {
    employerResendActivationLink{
      status
      email
    }
  }
`

export const SIGNUP_EMPLOYER_MUTATION = gql `
mutation ($name: String!, $email: String!, $password: String!){
  employerCreateAccount(name: $name, email: $email, password: $password){
    jwt
    name
  }
}
`

export const EMPLOYER_CREATE_PAYMENT_MUTATION = gql`
mutation ($paystackReference: String!) {
  institutionFindOrCreateMccPayment ( paystackReference: $paystackReference) {
    _id
    paystackReference
    createdAt
    transactionDate
    amount
    currency
  }
}
`
