import Constants from 'expo-constants';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';


const HomeScreen = () => {
    return (
        <SafeAreaView>
        <View style={styles.view}>
            <Text>
                HomeScreen
            </Text>
        </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    view:{
        // paddingTop:Platform.OS=='android'?40:0,
        paddingTop:Constants.statusBarHeight,
    }
});

export default HomeScreen;