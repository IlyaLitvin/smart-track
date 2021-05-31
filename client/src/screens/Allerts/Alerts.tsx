import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import Header from '../../components/Header/Header';
import Assistants from './screens/Assistants/Assistants';
import Doctors from './screens/Doctors/Doctors';
import Receptionist from './screens/Receptionist/Receptionist';

const Tab = createMaterialTopTabNavigator();

export default function Alerts({navigation}) {
  return (
    <>
      <Header navigation={navigation} />
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
    </>
  );
}
