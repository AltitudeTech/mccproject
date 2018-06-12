import { ApolloClient, InMemoryCache } from 'apollo-boost'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import fetch from 'isomorphic-unfetch'

let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

<<<<<<< HEAD
function create(initialState, { getToken }) {
  // const uri = process.env.NODE_ENV !== 'production' ? 'http://localhost:7000/graphql' : 'https://ktt-yez-backend.herokuapp.com/graphql'
  const uri = 'http://localhost:9600/graphql'
  const httpLink = new HttpLink({
    uri: uri, // Server URL (must be absolute)
    credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
=======
function create (initialState, { getToken }) {
  if (!process.env.BACKEND_URL){
    console.error('BACKEND_URL env variable is missing');
  }
  const httpLink = createHttpLink({
    uri: process.env.BACKEND_URL,
    credentials: 'same-origin'
>>>>>>> 5ef650e31aa1a2af6d920f8a741994ece999bcd2
  })

  const authLink = setContext((_, { headers }) => {
    const token = getToken()
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ''
      }
    }
  })

  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState || {})
  })
}

export default function initApollo (initialState, options) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState, options)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, options)
  }

  return apolloClient
}
