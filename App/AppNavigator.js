import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DishDetailScreen from './screens/DishDetailScreeen';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
const Stack=createStackNavigator();
const Drawer = createDrawerNavigator();
const MenuStack=()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="MenuScreen" component={MenuScreen}/>
      <Stack.Screen name="DishDetail" component={DishDetailScreen}/>
    </Stack.Navigator>
  )
}

const AppNavigator = () => {
    return (

 
        <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Menu" component={MenuStack} />
      </Drawer.Navigator>
      // <HomeScreen></HomeScreen>
        
    );
};

export default AppNavigator;