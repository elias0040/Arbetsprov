import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TouchableOpacity, Touchable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from '../Style';


export default function Home({navigation}){
    return(
        <View style={styles.container}>
            <Text>Home</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Search')}>
                <Text>Search by city</Text>
            </TouchableOpacity>
        </View>
    );
}