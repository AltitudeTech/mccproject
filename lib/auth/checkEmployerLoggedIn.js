import gql from 'graphql-tag'
import { EMPLOYER_ISAUTHENTICATED_QUERY } from '../graphql/queries'
export default apolloClient => (
  apolloClient.query({
    query: EMPLOYER_ISAUTHENTICATED_QUERY
  }).then(({ data }) => {
    // console.log(data.candidateIsAuthenticated);
    return { isAuthenticated: data.employerIsAuthenticated}
  }).catch(() => {
    // Fail gracefully
    return { isAuthenticated: false }
  })
)
