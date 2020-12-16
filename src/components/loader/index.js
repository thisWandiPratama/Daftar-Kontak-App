//import liraries
import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { styles } from "../../styles/_loader";

// create a component
const Loader = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size ='large' color = 'skyblue'/>
        </View>
    );
};

//make this component available to the app
export default Loader;
