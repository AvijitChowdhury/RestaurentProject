import axios from 'axios';
import * as actionTypes from './ActionTypes';

export const loadDishes = dishes=>{
    return{
        type:actionTypes.LOAD_DISHES,
        payload:dishes,        
    }
} ;


export const getDishes=()=>dispatch=>{
    axios.get("https://restaurentproject-2b22b-default-rtdb.firebaseio.com/dishes.json").then(response=>dispatch(loadDishes(response.data)))
    .catch(error=>console.log(error))
};