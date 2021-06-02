import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Doctors from './Doctors/Doctors';
import Assistants from './Assistants/Assistants';
import Receptionist from './Receptionist/Receptionist';

const Tab = createMaterialTopTabNavigator();

const data = {
  title: 'alerts',
  doctors: [],
  assistants: [],
  receptionist: [],
};

export default function Tabs({title, doctors, assistants, receptionist}) {
  return (
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
      <Tab.Screen
        initialParams={{title, doctors}}
        name="Doctors"
        component={Doctors}
      />
      <Tab.Screen
        initialParams={{title, assistants}}
        name="Assistants"
        component={Assistants}
      />
      <Tab.Screen
        initialParams={{title, receptionist}}
        name="Receptionist"
        component={Receptionist}
      />
    </Tab.Navigator>
  );
}
