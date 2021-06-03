import * as React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import Router from './Router';

const client = new ApolloClient({
  uri: 'http://10.100.2.104:8080/graphql',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}
