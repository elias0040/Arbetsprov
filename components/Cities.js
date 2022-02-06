import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TouchableOpacity, Touchable, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import { PulseLoader } from 'react-spinners';
import axios from 'axios';

import styles from '../Style';

export default function Cities({route, navigation}){
    const {input} = route.params; //Grab user input sent through navigation parameters
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    const fetchCountryData = async () => {
        //Initalize URL that data will be fetched from

        var api_url = new URL('http://api.geonames.org/searchJSON?q=empty&username=weknowit'); 
        api_url.searchParams.set('q', input); //Set query parameter to user input from previous screen

        try{
            await axios
                .get(api_url)
                .then(res => {
                    if(res.data.totalResultsCount > 0) setData(res.data.geonames);
                    setLoading(false);
                })
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCountryData();
    }, []);

    return(
        <View style={styles.container}>
            {loading ? <PulseLoader color={'#ADE498'}/> : cityList(data, navigation)}
        </View>
    );
}

function cityList(data, navigation){
    return(
        <View style={styles.container}>
            <FlatList 
                data={data}
                renderItem={({item}) => (
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CityInformation', {input: item.name})}>
                            <Text style={styles.buttonText}>{item.name}</Text>
                        </TouchableOpacity>

                    </View>

                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}