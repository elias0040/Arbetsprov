import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TouchableOpacity, Touchable, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from '../Style';

export default function Search({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Search by city</Text>
            <TextInput 
                style={styles.textInput} 
                placeholder='Enter a city...' 
                placeholderTextColor={'grey'} 
            />
            <TouchableOpacity 
                style={[styles.button, {width: 100, height: 100, borderRadius: 80}]}
                onPress={() => navigation.navigate('CityInformation')}>
                    
                <Text style={styles.buttonText}>O</Text>
            </TouchableOpacity>
        </View>
    );
}