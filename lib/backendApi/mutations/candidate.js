/**
* GraphQl Candidate Mutations
*/
import gql from 'graphql-tag'

export const ACTIVATE_CANDIDATE_MUTATION = gql `
  mutation ($code: String!){
    candidateActivateAccount(code: $code) {
      isActivated
    }
  }
`

export const SIGNUP_CANDIDATE_MUTATION = gql `
mutation ($firstName: String!, $lastName: String!, $email: String!, $password: String!){
  candidateCreateAccount(firstName: $firstName, lastName: $lastName, email: $email, password: $password){
    jwt
    name
  }
}
`
