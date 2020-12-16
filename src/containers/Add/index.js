//import liraries
import React, {Component} from 'react';
import {View, Text, StatusBar, TouchableOpacity, Alert} from 'react-native';
import {styles} from '../../styles/_add';
import Header from '../../components/headers';
import Input from '../../components/input';
import {useState} from 'react';
import FIREBASE from '../../configs/FIREBASE'

// create a component
const AddKontak = ({navigation}) => {
  const [nama, setNama] = useState ('');
  const [no_hp, setNoHP] = useState ('');
  const [alamat, setAlamat] = useState ('');

  const submit = () => {
    if(nama && no_hp && alamat) {
        const kontakReferensi = FIREBASE.database().ref('Kontak');
        const kontak = {
            nama : nama,
            no_hp : no_hp,
            alamat : alamat
        }

        kontakReferensi
            .push(kontak)
            .then((result) => {
                Alert.alert('Sukses', 'Kontak Tersimpan')
                navigation.replace('Home')
            })
            .catch(error => console.log("Error " + error))
    }else {
        Alert.alert('Error', 'Nama, NO.HP, dan Alamat Wajib Diisi')
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="skyblue" />
      <Header title="Menambahkan Kontak" onPress={() => navigation.goBack ()} />
      <Input
        title="Nama Kontak"
        placeholder="Masukan Nama Kontak"
        onChangeText={nama => setNama (nama)}
      />
      <Input
        title="No. HP"
        placeholder="Masukan No. HP"
        onChangeText={no_hp => setNoHP (no_hp)}
        keyboardType="number-pad"
      />
      <Input
        title="Alamat"
        placeholder="Masukan Alamat"
        onChangeText={alamat => setAlamat (alamat)}
        isTextArea={true}
      />
      <View style={styles.conSubmit}>
        <TouchableOpacity style={styles.submit} onPress={() => submit()}>
          <Text style={styles.textSubmit}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

//make this component available to the app
export default AddKontak;
