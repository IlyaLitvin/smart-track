import * as React from 'react';
<<<<<<< HEAD
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import Router from './Router';

const client = new ApolloClient({
  uri: 'http://10.100.2.104:8080/graphql',
  cache: new InMemoryCache(),
});
=======
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import Router from './Router';
const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache(),
});

global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest;
global.FormData = global.originalFormData || global.FormData;

if (window.FETCH_SUPPORT) {
  window.FETCH_SUPPORT.blob = false;
} else {
  global.Blob = global.originalBlob || global.Blob;
  global.FileReader = global.originalFileReader || global.FileReader;
}
>>>>>>> origin/main

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}
