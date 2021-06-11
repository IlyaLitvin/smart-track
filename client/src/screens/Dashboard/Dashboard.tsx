import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/Header/Header';
import Doctor from '../../components/CurrentDoctor/CurrentDoctor';
import {HeaderProps} from '../../types/OtherTypes';

export default function Dashboard({navigation}: HeaderProps) {
  return (
    <>
      <Header navigation={navigation} />
      <ScrollView style={styles.container}>
        <Doctor />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6ff',
    paddingLeft: 16,
    paddingRight: 16,
  },
});
