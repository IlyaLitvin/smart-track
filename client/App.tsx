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

const globalAny: any = global;

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

globalAny.XMLHttpRequest =
  globalAny.originalXMLHttpRequest || globalAny.XMLHttpRequest;
globalAny.FormData = globalAny.originalFormData || globalAny.FormData;

globalAny.Blob = globalAny.originalBlob || globalAny.Blob;
globalAny.FileReader = globalAny.originalFileReader || globalAny.FileReader;

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
