import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screens/Auth/LoginScreen';
import RegisterScreen from './src/screens/Auth/RegisterScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StyleSheet} from 'react-native';
import Dashboard from './src/screens/Dashboard/Dashboard';
import Staff from './src/screens/Staff/Staff';
import Sequence from './src/screens/Sequence/Sequence';
import Alerts from './src/screens/Allerts/Alerts';

const AuthStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
  drawer: {
    width: '100%',
    backgroundColor: 'background: rgba(33, 33, 85, 1)',
    marginTop: 60,
  },
});

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
  return  <Drawer.Navigator
    drawerStyle={styles.drawer}
    drawerContentOptions={{
      activeBackgroundColor: '#6AC7BE',
      labelStyle: {
        color: 'white',
        fontSize: 25,
      },
      itemStyle: {
        paddingLeft: 25,
        marginLeft: '21.1428%',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
      },
    }}
    drawerPosition="right"
    overlayColor={'transparent'}
    minSwipeDistance={1000}>
    <Drawer.Screen name="Dashboard" component={Dashboard} />
    <Drawer.Screen name="Staff" component={Staff} />
    <Drawer.Screen name="Alerts" component={Alerts} />
    <Drawer.Screen name="Sequence" component={Sequence} />
  </Drawer.Navigator>
}
export default function App() {
  const routing = useRoute(true);

  return (
    <NavigationContainer>
      {routing}
    </NavigationContainer> 
  ); 
};

export default function App() {
  const routing = useRoute(true);
  return <NavigationContainer>{routing}</NavigationContainer>;
}

