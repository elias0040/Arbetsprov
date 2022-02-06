import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TouchableOpacity, Touchable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import { PulseLoader } from 'react-spinners';
import axios from 'axios';



import styles from '../Style';

export default function CityInformation({route, navigation}){
    const {input} = route.params; //Grab user input sent through navigation parameters
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    const fetchCityData = async () => {
        //Initalize URL that data will be fetched from

        var api_url = new URL('http://api.geonames.org/searchJSON?q=empty&maxRows=1&username=weknowit'); 
        api_url.searchParams.set('q', input); //Set query parameter to user input from previous screen

        try{
            await axios
                .get(api_url)
                .then(res => {
                    if(res.data.totalResultsCount > 0) setData(res.data.geonames[0]);
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
              {loading ?  <PulseLoader color={'#ADE498'}/> : //If loading is true display loading indicator
                (data === null) ? NoResultsFound() : ResultsFound(data) //Else display results if found
              }
           
        </View>
    );
}

//View to be displayed if results are found
function ResultsFound(data){
    return(
      <View style={styles.container}>
          <Text style={styles.subtitle}>{data.name}, {data.countryCode}</Text> 
          <Text style={styles.subtitle}>Population:</Text>  
          <Text style={styles.title}>{data.population}</Text>  
      </View>
    );
}

//View to be displayed if results are not foond
function NoResultsFound(){
    return(
        <Text style={styles.title}>No results found</Text>
    );
}