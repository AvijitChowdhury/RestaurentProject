import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const DishDetailScreeen = (props) => {
    const dish = props.route.params.dish;

    return (
       <View>
           <Image style={styles.image} source={{uri:dish.image}}></Image>
           {/* <Text> DishScreen </Text> */}
           <View style={styles.details}>
           <Text style={styles.name}>{dish.name}</Text>
           <Text style={styles.description}>{dish.description}</Text>
       </View>
       </View>
    );
};


const styles= StyleSheet.create({
    image:{
        width:"100%",
        height:300,
    },
    name:{
        fontSize:20,
        fontWeight:"500",
    },
    details:{
        padding:10
    },
    description:{
        fontSize:15
    }
})
export default DishDetailScreeen;