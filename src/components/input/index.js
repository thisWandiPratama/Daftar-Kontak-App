//import liraries
import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from '../../styles/_add';

// create a component
const AddKontak = ({
  onChangeText,
  placeholder,
  title,
  keyboardType,
  isTextArea,
}) => {
  return (
    <View>
      {isTextArea === true
        ? <View style={styles.input}>
            <Text style={styles.title}>{title}</Text>
            <TextInput
              placeholder={placeholder}
              style={[styles.inputan,{textAlignVertical:'top'}]}
              onChangeText={onChangeText}
              keyboardType={keyboardType}
              multiline= {true}
              numberOfLines = {4}
            />
          </View>
        : <View style={styles.input}>
            <Text style={styles.title}>{title}</Text>
            <TextInput
              placeholder={placeholder}
              style={styles.inputan}
              onChangeText={onChangeText}
              keyboardType={keyboardType}
            />
          </View>}
    </View>
  );
};

//make this component available to the app
export default AddKontak;
