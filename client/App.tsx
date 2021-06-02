import * as React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Router from './Router'

const client = new ApolloClient({
  uri: 'http://10.100.2.200:8080/graphql',
  cache: new InMemoryCache()
})

export default function App() {
  return <ApolloProvider client={client}>
            <Router />
          </ApolloProvider>
};
