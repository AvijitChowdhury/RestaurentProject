import React from 'react';
import { Button, Text, View } from 'react-native';

const MenuScreen = (props) => {
    console.log(props);
    return (
        <View>
            <Text>MenuScreen </Text>
            <Button onPress={()=>props.navigation.navigate('DishDetail')} title="Press"></Button>
        </View>
    );
};

export default MenuScreen;