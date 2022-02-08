import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TouchableOpacity, Touchable, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';


import styles from '../Style';
import infoLog from 'react-native/Libraries/Utilities/infoLog';

export default function CityInformation({route, navigation}){
    const {input} = route.params; //Grab user input sent through navigation parameters
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    const fetchCityData = async () => {
        //Initalize URL that data will be fetched from
        const api_url = 'http://api.geonames.org/searchJSON?q=' + input + '&maxRows=1&username=weknowit';

        await axios
            .get(api_url)
            .then(res => {
                if(res.data.totalResultsCount > 0) setData(res.data.geonames[0]);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
                setError(error);
            });
        
    }

    useEffect(() => {
        fetchCityData();
    }, []);

    return(
        <LinearGradient colors={['#4da7ac', '#0097ff']} style={styles.container}>
              {loading ?  <Text>Loading...</Text> : //If loading is true display loading indicator
                (data === null) ? NoResultsFound() : <View style={[styles.container]}>{ResultsFound(data)}</View> //Else display results if found
                
      
              }
           
        </LinearGradient>
    );
}

//View to be displayed if results are found
function ResultsFound(data){

    return(
      <View style={styles.container}>
          <Text style={styles.title}>{data.name}, {data.countryCode}</Text> 
          <View style={styles.infoContainer}>
            <Text style={styles.subtitle}>Population:</Text>  
            <Text style={[styles.title, {color: '#3EC1D3'}]}>{data.population}</Text>  
          </View>
          

      </View>
    );
}

//View to be displayed if results are not foond
function NoResultsFound(){
    return(
        <Text style={styles.title}>No results found</Text>
    );
}