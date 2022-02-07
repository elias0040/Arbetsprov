import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TouchableOpacity, Touchable, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import axios from 'axios';

import { getCode } from 'country-list';

import styles from '../Style';

export default function Cities({route, navigation}){
    const {input} = route.params; //Grab user input sent through navigation parameters
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    const fetchCountryData = async () => {
        //Initalize URL that data will be fetched from

        const countryCode = getCode(input); //Convert country name to ISO-3166 country code
        const api_url = 'http://api.geonames.org/searchJSON?country=' + countryCode + '&orderby=population&featureClass=P&username=weknowit'

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
            {loading ? <Text>Loading...</Text> : cityList(data, navigation)}
        </View>
    );
}

function cityList(data, navigation){
    return(
        <View style={[styles.container, {width: '100%'}]}>
            <FlatList 
                style={{width: '90%'}}
                data={data}
                renderItem={({item}) => (
                    <View>
                        <TouchableOpacity style={styles.listEntry} onPress={() => navigation.navigate('CityInformation', {input: item.name})}>
                            <Text style={styles.buttonText}>{item.name}</Text>
                        </TouchableOpacity>

                    </View>

                )}
                keyExtractor={((item, index) => index.toString())}
            />
        </View>
    );
}