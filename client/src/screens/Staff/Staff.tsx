import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/Header/Header';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import Doctors from '../../components/Doctors/Doctors';
import Assistants from '../../components/Assistants/Assistants';
import Receptionist from '../../components/Receptionist/Receptionist';

type HeaderProps = {
  navigation: DrawerNavigationProp<any, any>;
};

export default function Staff({navigation}: HeaderProps) {
  return (
    <>
      <Header navigation={navigation} />
      <ScrollView style={styles.container}>
        <Doctors />
        <Assistants />
        <Receptionist />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6FF',
    paddingLeft: 16,
    paddingRight: 16,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
  },
});
