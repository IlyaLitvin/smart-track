import * as React from 'react';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import Router from './Router';
const client = new ApolloClient({
  uri: 'http://10.100.3.140:8080/graphql',
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

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}
