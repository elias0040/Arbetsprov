import { StyleSheet } from 'react-native';

const mainColor = '#3EC1D3';
const secondaryColor = '#ADE498';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
      },
    button: {
      backgroundColor: 'black',
      width: '90%',
      height: 80,
      marginTop: 21,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
    },
    buttonText: {
      color: 'white',
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
      color: '#545454',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 40,
      color: 'white',
      marginBottom: 20,
    },
    subtitle: {
      fontSize: 25,
      color: 'white',
    },
    spinner: {
      fontWeight: 'bold',
      fontSize: 40,
      color: 'white',
    },
    listEntry: {
      backgroundColor: 'black',
      alignItems: 'flex-start',
      justifyContent: 'center',
      borderRadius: 30,
      padding: 20,
      marginBottom: 15,
      height: 100
      
    },
    infoContainer: {
      backgroundColor: 'black',
      width: '70%',
      borderRadius: 30,
      padding: 30,
      alignItems: 'center'
    }
});