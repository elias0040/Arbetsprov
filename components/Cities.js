import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TouchableOpacity, Touchable, FlatList, ActivityIndicator, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';

import { getCode } from 'country-list';

import styles from '../Style';

export default function Cities({route, navigation}){
    const {input} = route.params; //Grab user input sent through navigation parameters
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const countryName = input.charAt(0).toUpperCase() + (input.toLowerCase()).slice(1);

    const fetchCountryData = async () => {
        
        const countryCode = getCode(input); //Convert country name to ISO-3166 country code, to be used within API search parameters
        //Initalize URL that data will be fetched from
        const api_url = 'http://api.geonames.org/searchJSON?country=' + countryCode + '&orderby=population&featureClass=P&featureCode=PPL&featureCode=PPLA&featureCode=PPLA2&featureCode=PPLA3&featureCode=PPLA4&featureCode=PPLC&maxRows=1000&username=weknowit'

        await axios
            .get(api_url)
            .then(res => {
                if(res.data.totalResultsCount > 0) setData(res.data.geonames);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
                setError(error);
            });
}

    useEffect(() => {
        fetchCountryData();
    }, []);

    return(
        <LinearGradient colors={['#4da7ac', '#0097ff']} style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{countryName}</Text>
            </View>

            {loading ? <ActivityIndicator size='large' color='white'/> : cityList(data, navigation)}
        </LinearGradient>
    );
}

function cityList(data, navigation){
    return(
        <View style={styles.listContainer}>
            <FlatList 
                style={{width: '100%'}}
                horizontal={false}
                showsVerticalScrollIndicator={false}
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                        <TouchableOpacity style={{width: '100%', height: 120, marginBottom: 10, borderRadius: 30}} onPress={() => navigation.navigate('CityInformation', {cityData: item})}>
                            <ImageBackground source={{uri: 'https://random.imagecdn.app/500/10' + data.indexOf(item) % 9}} style={{width: '100%', height: '100%'}} imageStyle={{borderRadius: 30}}>
                                <LinearGradient start={{x: 0.5, y: 0.5}} end={{x: 1, y: 0.9}} colors={['white', 'transparent']} style={styles.listEntry} >
                                    <Text style={styles.listLabel}> # {(data.indexOf(item) + 1)}</Text>
                                    <Text style={styles.buttonText}>{item.name}</Text>
                                </LinearGradient>
                            </ImageBackground>

                        </TouchableOpacity>
                )}
                
            />
        </View>
    );
}