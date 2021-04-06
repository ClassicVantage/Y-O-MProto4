
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LogInScreen from './Screens/LogInScreen'

import {AppTabNavigator} from './components/AppTabNavigator'
export default function App() {
  return (
    <AppContainer/>
  );

  const switchNavigator = createSwitchNavigator({
    WelcomeScreen:{screen:WelcomeScreen},
    BottomTab:{screen:AppTabNavigator},

  })
}


const AppContainer= createAppContainer(switchNavigator)
