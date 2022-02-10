import {Text, TextInput, View} from 'react-native';
import { useState } from 'react';

import styles from '../Style';
import { LinearGradient } from 'expo-linear-gradient';

import SearchButton from '../components/searchButton';

export default function Search({route, navigation}){
    const {byCountry} = route.params; //Alternative that user selected at homescreen, equals true or false
    const [data, setData] = useState({textInput: ''})

    return(
        <LinearGradient colors={['#4da7ac', '#0097ff']} style={styles.container}>
            <View style={styles.titleContainer}>
                {byCountry ? <Text style={styles.title}>Search by country</Text> : <Text style={styles.title}>Search by city</Text>}
            </View>

            <TextInput 
                style={styles.textInput} 
                placeholder='Type here' 
                placeholderTextColor={'grey'}
                onChangeText={(input) => setData({textInput: input})}
            />

            <SearchButton onPressFunction={() => navigation.navigate((byCountry ? 'Cities' : 'City Information'), {input: data.textInput, cityData: null})} />
            
        </LinearGradient>
    );
}