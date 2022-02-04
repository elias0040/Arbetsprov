import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TouchableOpacity, Touchable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from '../Style';


export default function Home({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>CityPop</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Search')}>
                <Text style={styles.buttonText}>Search by city</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Search')}>
                <Text style={styles.buttonText}>Search by country</Text>
            </TouchableOpacity>
        </View>
    );
}