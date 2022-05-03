import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Icon from './components/Icon';
import DishDetailScreen from './screens/DishDetailScreeen';
import FavouritesScreen from './screens/FavouritesScreen';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';

const Stack=createStackNavigator();
const Drawer = createDrawerNavigator();
const MenuStack=()=>{
  const navigation= useNavigation();
  return(
    <Stack.Navigator
    screenOptions={{
      headerRight:()=>(<Icon
      action ={()=>navigation.toggleDrawer()}
          name="ios-menu"
          size={24}
          color="black"
          iconStyle={{paddingRight:15}}
      />),
      headerStyle:{
        backgroundColor:'#F53B50',
      },
      headerTintColor:"#fff",
      headerTitleStyle:{
        fontWeight:'bold',
      }
    }
    }
    >
      <Stack.Screen name="Menu " component={MenuScreen}/>
      <Stack.Screen name="DishDetail" component={DishDetailScreen}
       options={({route})=>({title:route.params.dish.name})}/>
    </Stack.Navigator>
  )
}

const FavStack=()=>{
  const navigation= useNavigation();
  return(
  <Stack.Navigator
  screenOptions={{
    headerRight:()=>(<Icon
    action ={()=>navigation.toggleDrawer()}
        name="ios-menu"
        size={24}
        color="black"
        iconStyle={{paddingRight:15}}
    />),
    headerStyle:{
      backgroundColor:'#F53B50',
    },
    headerTintColor:"#fff",
    headerTitleStyle:{
      fontWeight:'bold',
    }
  }
  }>
    <Stack.Screen name="Favourites" component={FavouritesScreen}/>
  </Stack.Navigator>
  )};

const AppNavigator = () => {
    return (

 
        <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Menu" component={MenuStack} />
        <Drawer.Screen name="Favourites " component={FavStack}/>
      </Drawer.Navigator>
      // <HomeScreen></HomeScreen>
        
    );
};

export default AppNavigator;