import * as React from 'react';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import Router from './Router';
import {createNetworkStatusNotifier} from 'react-apollo-network-status';
import {ActivityIndicator, Dimensions, StyleSheet, View} from 'react-native';
const {link, useApolloNetworkStatus} = createNetworkStatusNotifier();

const client = new ApolloClient({
  link: link.concat(createHttpLink({uri: 'http://localhost:8080/graphql'})),
  cache: new InMemoryCache(),
});

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99999,
    elevation: 9999,
  },
});

export function GlobalLoadingIndicator() {
  const {numPendingQueries, numPendingMutations} = useApolloNetworkStatus();

  if (numPendingQueries > 0 || numPendingMutations > 0) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size={80} color="#72e8d4" />
      </View>
    );
  } else {
    return null;
  }
}

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
    <>
      <GlobalLoadingIndicator />
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </>
  );
}
