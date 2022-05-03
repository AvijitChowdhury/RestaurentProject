import React from 'react';
import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { removeFavourite } from '../Redux/ActionCreators';


const mapDispatchToProps =(dispatch)=>{
    return{
        removeFavourite:dish=>dispatch(removeFavourite(dish)),
    }
}
const Card = (props) => {
    const removeFav=()=>{
        Alert.alert('Delete Favourite?',
        'Are you sure to wish you to delete the favourite dish '+props.item.name+"?",
        [
            {
                text:'cancel',
                onPress:()=>console.log('cancelled'),
                style:'cancel',

            },
            {
                text:'ok',
                onPress:()=>props.removeFavourite(props.item)
            }
        ],{cancelable:false});
    }
    return (
        <Pressable onLongPress={()=>{removeFav()}}>
            <View style={styles.card}>
            <Image style={styles.image} source={{uri:props.item.image }}></Image>
            <View style={styles.details}>
                <Text style={styles.title}>{props.item.name}</Text>
            </View>
        </View>
        </Pressable>
    );
};

const styles=StyleSheet.create({
    card:{
        borderRadius:15,
        backgroundColor:"white",
        margin:20,
        elevation:5,
        overflow:'hidden',
    },
    details:{
        padding:25,
    },
    image:{
        width:"100%",
        height:150,
    },title:{
        marginBottom:7,
        fontSize:20,
    }
})
export default connect(null,mapDispatchToProps)(Card);