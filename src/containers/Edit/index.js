//import liraries
import React from 'react';
import {View, Text, StatusBar, TouchableOpacity, Alert} from 'react-native';
import {styles} from '../../styles/_add';
import Header from '../../components/headers';
import Input from '../../components/input';
import {useState} from 'react';
import FIREBASE from '../../configs/FIREBASE';
import Loader from '../../components/loader';
import { useEffect } from 'react/cjs/react.development';

// create a component
const EditKontak = ({navigation, route}) => {
  const [nama, setNama] = useState ('');
  const [no_hp, setNoHP] = useState ('');
  const [alamat, setAlamat] = useState ('');
  const [loader, setLoader] = useState (false);

  useEffect(() => {
    setNama(route.params.nama)
    setNoHP(route.params.no_hp)
    setAlamat(route.params.alamat)
  },[])

  const submit = () => {
    if (nama && no_hp && alamat) {
      setLoader (true);
      const kontakReferensi = FIREBASE.database ().ref ('Kontak/'+route.params.key);
      const kontak = {
        nama: nama,
        no_hp: no_hp,
        alamat: alamat,
      };

      kontakReferensi
        .update (kontak)
        .then (result => {
          setLoader (false);

          Alert.alert ('Sukses', 'Kontak Terupdate');
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
      <Header title="Mengedit Kontak" onPress={() => navigation.goBack ()} />
      <Input
        title="Nama Kontak"
        placeholder="Masukan Nama Kontak"
        onChangeText={nama => setNama (nama)}
        value = {nama}
      />
      <Input
        title="No. HP"
        placeholder="Masukan No. HP"
        onChangeText={no_hp => setNoHP (no_hp)}
        keyboardType="number-pad"
        value = {no_hp}
      />
      <Input
        title="Alamat"
        placeholder="Masukan Alamat"
        onChangeText={alamat => setAlamat (alamat)}
        isTextArea={true}
        value = {alamat}
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
export default EditKontak;
