import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  //expires in 7 days
  const token = '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' //in case of invalid token, replace it for a new one.
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

// Initializing apollo client
const CLIENT = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export { CLIENT } ;