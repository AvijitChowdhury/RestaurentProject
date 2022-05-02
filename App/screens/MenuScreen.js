import React, { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { getDishes } from '../Redux/ActionCreators';
import MenuItem from './../components/MenuItem';



const mapStateToProps= state=>{
    return{
        dishes:state.dishes,
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        getDishes:()=>dispatch(getDishes()),
    }
}
const MenuScreen = (props) => {
    useEffect(()=>{
        props.getDishes();
    },[]);
    //  console.log(props.dishes);
    //  console.log(props.dishes.Object);
    return (
        <View>
            {/* <Text>MenuScreen </Text>
            <Button onPress={()=>props.navigation.navigate('DishDetail')} title="Press"></Button> */}

            <FlatList
                data={props.dishes}
                renderItem={
                    ({item})=>(
                        // <Text style={styles.menu}>{item.name}</Text>
                        <MenuItem item={item}
                        selectDish={()=>props.navigation.navigate('DishDetail',{dish:item})}
                        ></MenuItem>
                    )
                }
                keyExtractor={item=>item.id.toString()}
            />
        </View>
    );
};

const styles=StyleSheet.create({
    menu:{
        paddingLeft:15
    }
})
export default connect(mapStateToProps,mapDispatchToProps) (MenuScreen);