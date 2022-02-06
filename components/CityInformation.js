import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TouchableOpacity, Touchable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import { PulseLoader } from 'react-spinners';
import { fetchCityData } from '../Functions';
import axios from 'axios';



import styles from '../Style';

export default function CityInformation({route, navigation}){
    const {cityName} = route.params;
    const [loading, setLoading] = useState(true);
    const [cityData, setCityData] = useState(null);

    const fetchCityData = async () => {
        var api_url = new URL('http://api.geonames.org/searchJSON?q=empty&maxRows=1&username=weknowit');
        api_url.searchParams.set('q', cityName);

        try{
            const data = await axios
            .get(api_url)
            .then(res => {
                console.log(res.data);
                if(res.data.totalResultsCount > 0) setCityData(res.data.geonames[0]);
                setLoading(false);
            })
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCityData();
    }, []);

    return(
        <View style={styles.container}>
              {loading ?  <PulseLoader color={'#ADE498'}/> : (cityData === null) ? <Text>No results found</Text> : <Text>{cityData.population}</Text>
                    
                     
              }
           
        </View>
      

        

    );
}