//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { styles } from "../../styles/_home";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';


// create a component
const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <TouchableOpacity style={styles.btnAdd} onPress = { () => navigation.navigate('Add') }>
                <FontAwesomeIcon icon={faPlus} size= {20} color='#FFFF' />
            </TouchableOpacity>
        </View>
    );
};

//make this component available to the app
export default Home;
