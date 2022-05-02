import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';

const Icon = (props) => {
    return (
        <TouchableOpacity style={{...props.iconStyle}} onPress={props.action}>
            <Ionicons name={props.name} size={props.size} color={props.color}></Ionicons>
        </TouchableOpacity>
    );
};

export default Icon;