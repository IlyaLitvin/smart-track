import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/Auth/LoginScreen';
import RegisterScreen from './screens/Auth/RegisterScreen';
import PostsScreen from './screens/main/PostsScreen';
import CreateScreen from './screens/main/CreateScreen';
import ProfileScreen from './screens/main/ProfileScreen';

import BurgerMenu from './assets/image/Group 1710.svg';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const useRoute = (isAuth) => {
  if(!isAuth ) {
   return <AuthStack.Navigator>
      <AuthStack.Screen options={{headerShown: false}} name='Login' component={LoginScreen}/>
      <AuthStack.Screen options={{headerShown: false}} name='Register' component={RegisterScreen}/>
    </AuthStack.Navigator> 
  };
  return <MainTab.Navigator tabBarOptions={{showLabel: false}}>
    <MainTab.Screen options={{
        tabBarIcon: ({focused, size, color}) => {
            <BurgerMenu  />
        },
    }} name='Posts' component={PostsScreen} />
    <MainTab.Screen name='Create' component={CreateScreen} />
    <MainTab.Screen name='Profile' component={ProfileScreen} />
  </MainTab.Navigator>
};

export default useRoute;