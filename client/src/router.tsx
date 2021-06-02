import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './screens/Auth/LoginScreen';
import RegisterScreen from './screens/Auth/RegisterScreen';

const AuthStack = createStackNavigator();

const useRoute = isAuth => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{headerShown: false}}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{headerShown: false}}
          name="Register"
          component={RegisterScreen}
        />
      </AuthStack.Navigator>
    );
  }
};

export default useRoute;
