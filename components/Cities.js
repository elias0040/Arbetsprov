import {Text, View, TouchableOpacity, FlatList, ActivityIndicator, ImageBackground } from 'react-native';

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';

import styles from '../Style';

import { getCityBanner } from '../Functions';

export default function Cities({route, navigation}){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const {input} = route.params; //Grab user input sent through navigation parameters

    const countryName = (input.charAt(0).toUpperCase()) + input.slice(1).toLowerCase();

    /** fetchCountryData
     * Function used to fetch list of cities within a country, ordered by population. 
     * First API call is used in order to grab the correct country code depending on user input, which is later used in 
     * the second API call in order to grab cities within  the country. The view will display an activity indicator while fetching the data. 
     */
    const fetchCountryData = async () => {

        var countryCode;
        var api_url = 'http://api.geonames.org/searchJSON?name_equals=' + input + '&featureCode=PCLI&username=weknowit&maxRows=1';

        //Grab country code depending on user input
        await axios
        .get(api_url)
        .then(res => {
            if(res.data.totalResultsCount > 0) countryCode = res.data.geonames[0].countryCode;
            api_url = 'http://api.geonames.org/searchJSON?country=' + countryCode + '&orderby=population&featureClass=P&featureCode=PPL&featureCode=PPLA&featureCode=PPLA2&featureCode=PPLA3&featureCode=PPLA4&featureCode=PPLC&maxRows=1000&username=weknowit';
        })
        .catch(error => {
            console.log(error);
            setError(error);
            setLoading(false);
        });
 
        
        await axios
        .get(api_url)
        .then(res => {
            if(res.data.totalResultsCount > 0) setData(res.data.geonames);
            setLoading(false);
        })
        .catch(error => {
            console.log(error);
            setError(error);
            setLoading(false);
        });
    }

    useEffect(() => {
        fetchCountryData();
    }, []);

    return(
        <LinearGradient colors={['#4da7ac', '#0097ff']} style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}> {countryName} </Text>
            </View>

            {loading ? <ActivityIndicator size='large' color='white'/> : //Display loading indicator while fetching data
                (data != null) ? cityList(data, navigation) : NoResultsFound() //Display city list if results were found, else notify the user.
                } 
        </LinearGradient>
    );
}

//View to be displayed if results were found
function cityList(data, navigation){
    return(
        <View style={styles.listContainer}>
            <FlatList 
                style={{width: '100%'}}
                horizontal={false}
                showsVerticalScrollIndicator={false}
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => listEntry(item, data, navigation)}
            />
        </View>
    );
}

//View to be displayed if user input does not yield any results
function NoResultsFound(){
    return(
        <Text style={styles.title}>Country not found</Text>
    );
}

//List entry, to be rendered within flat list
function listEntry(item, data, navigation){
    return(
        <TouchableOpacity style={{width: '100%', height: 120, marginBottom: 10, borderRadius: 30}} onPress={() => navigation.navigate('City Information', {cityData: item})}>
            <ImageBackground source={getCityBanner(item.population)} style={{width: '100%', height: '100%'}} imageStyle={{borderRadius: 30}}>
                <LinearGradient start={{x: 0.6, y: 0.5}} end={{x: 0.9, y: 0.9}} colors={['white', 'transparent']} style={styles.listEntry} >
                    <Text style={styles.listLabel}> # {(data.indexOf(item) + 1)}</Text>
                    <Text style={styles.buttonText}>{item.name}</Text>
                    
                </LinearGradient>
            </ImageBackground>
     </TouchableOpacity>
    );
}
