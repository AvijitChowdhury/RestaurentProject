import React from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Icon from '../components/Icon';
import { addToFavourites } from '../Redux/ActionCreators';



const mapStateToProps=(state)=>{
    return{
        favourites:state.favourites,
    }
}
const mapDispatchToProps=(dispatch)=>{
   return{
       addToFavourites:(dish)=>dispatch(addToFavourites(dish)),
   }
}


const DishDetailScreeen = (props) => {
    const dish = props.route.params.dish;
    const isFavourite=props.favourites.some(item=>item.id===dish.id);
    const markToFavourite=(dish)=>{
        if(isFavourite){
            Alert.alert('Already Added To Your Favourites!....');
        }else{
            Alert.alert('Added to your favourite foods...');
            props.addToFavourites(dish);
        }
        
    }
    let iconName="heart-outline";
    if(isFavourite){
        iconName="heart";
    }

    return (
       <View>
           <Image style={styles.image} source={{uri:dish.image}}></Image>
           {/* <Text> DishScreen </Text> */}
           <View style={styles.details}>
                {/* <Text style={styles.name}>{dish.name}</Text> */}
                <Icon name={iconName} color="#F53B50" size={39} iconStyle={
                    {padding:10}}
                    action={()=>markToFavourite(dish)}></Icon>
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
export default connect(mapStateToProps,mapDispatchToProps) (DishDetailScreeen);