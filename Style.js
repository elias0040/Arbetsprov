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
    titleContainer: {
      position: 'absolute',
      height: 100,
      width: '100%',
      top: '10%',
      alignItems: 'center',
    },
    listContainer: {
      position: 'absolute',
      bottom: 0,
      overflow: 'hidden',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      height: '80%',
      width: '90%',
      backgroundColor: 'transparent',
      alignItems: 'flex-end',
      justifyContent: 'center'
  },
    button: {
      backgroundColor: 'white',
      width: '90%',
      height: 80,
      marginTop: 21,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
    },
    buttonText: {
      fontWeight: '100',
      color: 'black',
      fontSize: 22,
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
      paddingBottom: 30,
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
      backgroundColor: 'transparent',
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
      borderRadius: 30,
      padding: 20,
      height: '100%'
      
    },
    listLabel: {
      color: 'grey',
      fontSize: 15,
      fontWeight: '200',
      marginBottom: 30,
    },
    infoContainer: {
      position: 'absolute',
      bottom: 0,
      height: '60%',
      backgroundColor: '#0d0128',
      width: '100%',
      borderRadius: 0,
      paddingTop: 30,
      alignItems: 'center'
    },
    linearGradient:{
      width: '100%',
      height: '100%',
      alignItems: 'center',
    }
});