import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import AppNavigator from './App/AppNavigator';
import { store } from './App/Redux/Store';
// NativeModules.DevSettings.setIsDebuggingRemotely(false);
export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
          <AppNavigator></AppNavigator>
          </NavigationContainer>
    </Provider>
    
   
  );
}

