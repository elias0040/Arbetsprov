import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TouchableOpacity, Touchable, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

import styles from '../Style';


export default function Search({route, navigation}){
    const {byCountry} = route.params;
    const [data, setData] = useState({textInput: ''})

    return(
        <View style={styles.container}>
            {byCountry ? <Text style={styles.title}>Search by country</Text> : <Text style={styles.title}>Search by city</Text>}
            <TextInput 
                style={styles.textInput} 
                placeholder='Type here' 
                placeholderTextColor={'grey'}
                onChangeText={(input) => setData({textInput: input})}
            />
            <TouchableOpacity 
                style={[styles.button, {width: 100, height: 100, borderRadius: 80}]}
                onPress={() => navigation.navigate((byCountry ? 'Cities' : 'CityInformation'), {input: data.textInput})}>
                    
                <Text style={styles.buttonText}>O</Text>
            </TouchableOpacity>
        </View>
    );
}