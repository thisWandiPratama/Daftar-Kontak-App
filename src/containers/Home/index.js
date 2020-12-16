//import liraries
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../../styles/_home';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faUser} from '@fortawesome/free-solid-svg-icons';
import FIREBASE from '../../configs/FIREBASE';
import Header from '../../components/headers';

// create a component
const Home = ({navigation}) => {
  const [kontaks, setKontaks] = useState ({});
  const [kontaksKey, setKontaksKey] = useState ([]);

  useEffect (() => {
    getData ();
    setTimeout (() => {
      console.log (kontaks);
      console.log (kontaksKey);
    }, 5000);
  }, []);

  const getData = () => {
    FIREBASE.database ().ref ('Kontak').once ('value', querySnapShot => {
      let data = querySnapShot.val () ? querySnapShot.val () : {};
      let kontakItem = {...data};
      setKontaks (kontakItem);
      setKontaksKey (Object.keys (kontakItem));
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Daftar Kontak" onPress={() => navigation.goBack ()} />
      {kontaksKey.length > 0
        ? kontaksKey.map (key => (
            <View style={styles.kontak} key={key}>
              <FontAwesomeIcon icon={faUser} size={25} color="blue" />
              <View>
                <Text style={styles.nama}> {kontaks[key].nama} </Text>
                <Text style={styles.nomor}> {kontaks[key].no_hp} </Text>
              </View>
            </View>
          ))
        : <View style={styles.kontakKosong}>
            <Text style={styles.kosong}>Daftar Kosong</Text>
          </View>}
      <TouchableOpacity
        style={styles.btnAdd}
        onPress={() => navigation.navigate ('Add')}
      >
        <FontAwesomeIcon icon={faPlus} size={20} color="#FFFF" />
      </TouchableOpacity>
    </View>
  );
};

//make this component available to the app
export default Home;
