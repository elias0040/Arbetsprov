import { StyleSheet } from 'react-native';

const mainColor = '#3EC1D3';
const secondaryColor = '#ADE498';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: mainColor,
        alignItems: 'center',
        justifyContent: 'center'
      },
    button: {
      backgroundColor: secondaryColor,
      width: '90%',
      height: 80,
      marginTop: 21,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
    },
    buttonText: {
      color: 'black',
      opacity: 0.3,
      fontSize: 22,
      fontWeight: 'bold',
    },
    textInput: {
      backgroundColor: 'white',
      width: '70%',
      height: 50,
      borderRadius: 20,
      textAlign: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 40,
      outlineColor: "grey",
      color: '#545454',
      outlineStyle: "solid",
      outlineWidth: 4,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 40,
      color: 'white',
    },
    subtitle: {
      fontSize: 30,
      color: 'grey',
    },
    spinner: {
      fontWeight: 'bold',
      fontSize: 40,
      color: 'white',
    },
});