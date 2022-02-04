import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TouchableOpacity, Touchable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PulseLoader } from 'react-spinners';

import styles from '../Style';

export default function Search({navigation}){
    return(
        <View style={styles.container}>
            <PulseLoader color={'#ADE498'}/>
        </View>
    );
}