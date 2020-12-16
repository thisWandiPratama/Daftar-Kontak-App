import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  btnAdd: {
    height: 50,
    width: 50,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginRight: 20,
    marginBottom: 20,
  },
  kontak: {
    height: 50,
    margin: 10,
    flexDirection : 'row',
    alignItems:'center'
  },
  nama: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  nomor : {
    fontSize : 12,
    color : 'rgba(0,0,0,0.5)'
  },
  kontakKosong: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {styles};
