import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from 'react-navigation-stack';
// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";
import Home from "./screens/Home/Home";

const MainStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen name="Registration" component={Register} />
        <MainStack.Screen name="Login" component={Login} />
        <MainStack.Screen name="Home" component={Home} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;



   
