import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/Header/Header';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Assistants from './Tabs/AssistantsTab/AssistantsTab';
import Doctors from './Tabs/DoctorsTab/DoctorsTab';
import Receptionist from './Tabs/ReceptionistTab/ReceptionistTab';

const Tab = createMaterialTopTabNavigator();

type HeaderProps = {
  navigation: DrawerNavigationProp<any, any>;
};

export default function Staff({navigation}: HeaderProps) {
  return (
    <>
      <Header navigation={navigation} />
      <ScrollView style={styles.container}>
      <Tab.Navigator
        tabBarOptions={{
          indicatorStyle: {
            width: 22,
            left: '14.333%',
            height: 1,
          },
          indicatorContainerStyle: {
            flexDirection: 'row',
            justifyContent: 'center',
          },
          style: {
            elevation: 0,
          },
        }}>
        <Tab.Screen name="Doctors" component={Doctors} />
        <Tab.Screen name="Assistants" component={Assistants} />
        <Tab.Screen name="Receptionist" component={Receptionist} />
      </Tab.Navigator>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F6F6FF",
      fontFamily: "Poppins",      
      fontStyle: "normal",   
    },
});