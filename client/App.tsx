import React from 'react';
import {} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';
import NavBar from './components/NavBar/NavBar';

const AuthStack = createStackNavigator();

export default function App() {
  return (
   <NavBar />
  );
};

{/* <NavigationContainer>
<AuthStack.Navigator>
  <AuthStack.Screen options={{headerShown: false}} name='Login' component={LoginScreen}/>
  <AuthStack.Screen options={{headerShown: false}} name='Register' component={RegisterScreen}/>
</AuthStack.Navigator>  
</NavigationContainer> */}