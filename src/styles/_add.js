import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    input : {
        margin: 5
    },
    title : {
        fontSize : 15,
        fontWeight:'bold',
    },
    inputan : {
        borderBottomColor : 'skyblue',
        borderBottomWidth : 1
    },
    conSubmit : {
        width : '100%',
        height: 50,
    },
    submit : {
        alignItems:'center',
        justifyContent: 'center',
        height : 50,
        backgroundColor : 'skyblue',
        width : '100%'
    },
    textSubmit : {
        color : '#fff',
        fontSize : 20,
        fontWeight : 'bold'
    }
})
export { 
    styles
}