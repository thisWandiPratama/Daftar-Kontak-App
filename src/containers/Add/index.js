//import liraries
import React from 'react';
import {View, Text, StatusBar, TouchableOpacity, Alert} from 'react-native';
import {styles} from '../../styles/_add';
import Header from '../../components/headers';
import Input from '../../components/input';
import {useState} from 'react';
import FIREBASE from '../../configs/FIREBASE';
import Loader from '../../components/loader';

// create a component
const AddKontak = ({navigation}) => {
  const [nama, setNama] = useState ('');
  const [no_hp, setNoHP] = useState ('');
  const [alamat, setAlamat] = useState ('');
  const [loader, setLoader] = useState (false);

  const submit = () => {
    if (nama && no_hp && alamat) {
      setLoader (true);
      const kontakReferensi = FIREBASE.database ().ref ('Kontak');
      const kontak = {
        nama: nama,
        no_hp: no_hp,
        alamat: alamat,
      };

      kontakReferensi
        .push (kontak)
        .then (result => {
          setLoader (false);

          Alert.alert ('Sukses', 'Kontak Tersimpan');
          navigation.replace ('Home');
        })
        .catch (error => {
          setLoader (false);
          console.log ('Error ' + error);
        });
    } else {
      setLoader (false);
      Alert.alert ('Error', 'Nama, NO.HP, dan Alamat Wajib Diisi');
    }
  };

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
        {loader
          ? <Loader />
          : <TouchableOpacity style={styles.submit} onPress={() => submit ()}>
              <Text style={styles.textSubmit}>Submit</Text>
            </TouchableOpacity>}
      </View>
    </View>
  );
};

//make this component available to the app
export default AddKontak;
