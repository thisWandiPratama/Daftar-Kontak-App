//import liraries
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBackspace} from '@fortawesome/free-solid-svg-icons';
import {styles} from '../../styles/_headers';

// create a component
const Headers = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnBack} onPress={onPress}>
        <FontAwesomeIcon icon={faBackspace} size={30} color='#fff' />
      </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
    </View>
  );
};

//make this component available to the app
export default Headers;
