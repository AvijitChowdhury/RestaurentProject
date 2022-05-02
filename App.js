import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import AppNavigator from './App/AppNavigator';
// NativeModules.DevSettings.setIsDebuggingRemotely(false);
export default function App() {
  return (
    <NavigationContainer><AppNavigator></AppNavigator></NavigationContainer>
   
  );
}

