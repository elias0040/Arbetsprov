import {Text, TouchableOpacity, TextInput, Image} from 'react-native';
import { useState } from 'react';

import styles from '../Style';
import { LinearGradient } from 'expo-linear-gradient';

export default function Search({route, navigation}){
    const {byCountry} = route.params; //Alternative that user selected at homescreen, equals true or false
    const [data, setData] = useState({textInput: ''})

    return(
        <LinearGradient colors={['#4da7ac', '#0097ff']} style={styles.container}>
            {byCountry ? <Text style={styles.title}>Search by country</Text> : <Text style={styles.title}>Search by city</Text>}
            <TextInput 
                style={styles.textInput} 
                placeholder='Type here' 
                placeholderTextColor={'grey'}
                onChangeText={(input) => setData({textInput: input})}
            />
            <TouchableOpacity 
                style={[styles.button, {backgroundColor: '#16C79A',width: 100, height: 100, borderRadius: 80}]}
                onPress={() => navigation.navigate((byCountry ? 'Cities' : 'City Information'), {input: data.textInput, cityData: null})}>
                    
                <Image style={{width: '50%', height: '50%'}}source={require('../assets/search.png')}></Image>
            </TouchableOpacity>
        </LinearGradient>
    );
}