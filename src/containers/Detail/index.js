//import liraries
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../styles/_detail';
import Header from '../../components/headers';

// create a component
const Detail = ({route}) => {
  return (
    <View style={styles.container}>
      <Header title="Detail Kontak" onPress={() => navigation.goBack ()} />
      <View style={{margin: 10}}>
        <Text
          style={{fontSize: 20, fontWeight: 'bold', color: 'rgba(0,0,0,0.6)'}}
        >
          Nama
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>
          {route.params.nama}
        </Text>
      </View>
      <View style={{margin: 10}}>
        <Text
          style={{fontSize: 20, fontWeight: 'bold', color: 'rgba(0,0,0,0.6)'}}
        >
          Nomor Telepon
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>
          {route.params.no_hp}
        </Text>
      </View>
      <View style={{margin: 10}}>
        <Text
          style={{fontSize: 20, fontWeight: 'bold', color: 'rgba(0,0,0,0.6)'}}
        >
          Alamat
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>
          {route.params.alamat}
        </Text>
      </View>
    </View>
  );
};

//make this component available to the app
export default Detail;
