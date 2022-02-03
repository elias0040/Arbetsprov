import { StyleSheet } from 'react-native';

const mainColor = '#42DEE1';
const secondaryColor = '#6DECB9';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28B5B5',
        alignItems: 'center',
        justifyContent: 'center'
      },
      button: {
        backgroundColor: '#8FD9A8',
        width: '90%',
        height: 80,
        marginTop: 21,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15 ,
        shadowOffset : { width: 0, height: 13},
    },
    textInput: {
      backgroundColor: 'white',
      width: '70%',
      height: 50,
      borderRadius: 20,
      textAlign: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 40
    }
});