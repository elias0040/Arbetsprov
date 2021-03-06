import {Text, View, TouchableOpacity, FlatList, ActivityIndicator, ImageBackground } from 'react-native';

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';

import styles from '../Style';

import ListEntry from '../components/listEntry';
import Error from '../components/error';

export default function Cities({route, navigation}){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const {input} = route.params; //Grab user input sent through navigation parameters

    const countryName = (input.charAt(0).toUpperCase()) + input.slice(1).toLowerCase(); //Properly format user input

    /** fetchCountryData
     * Function used to fetch list of cities within a country, ordered by population. 
     * First API call is used in order to grab the correct country code depending on user input, which is later used in 
     * the second API call in order to grab cities within  the country. The view will display an activity indicator while fetching the data. 
     * 
     * Function is declared here instead of in an external file since it makes changing state less complicated
     */
    const fetchCountryData = async () => {
        var countryCode = null;
        var api_url = 'http://api.geonames.org/searchJSON?name_equals=' + input + '&featureCode=PCLI&username=weknowit&maxRows=1';

        //Grab country code depending on user input
        await axios
            .get(api_url)
            .then(res => {
                //Only change data state if API call yields any result
                if(res.data.totalResultsCount > 0){
                    countryCode = res.data.geonames[0].countryCode; 
                    api_url = 'http://api.geonames.org/searchJSON?country=' + countryCode + '&orderby=population&featureClass=P&featureCode=PPL&featureCode=PPLA&featureCode=PPLA2&featureCode=PPLA3&featureCode=PPLA4&featureCode=PPLC&maxRows=1000&username=weknowit';
                }else{
                    setLoading(false);
                }
                
                //Iniatite next API URL with fetched country code
                
            })
            .catch(error => {
                console.log(error);
                setError(error);
                setLoading(false);
            });
 
        if(countryCode != null){
            await axios
            .get(api_url)
            .then(res => {
                //Only change data state if API call yields any results
                if(res.data.totalResultsCount > 0) setData(res.data.geonames); 
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setError(error);
                setLoading(false);
            });
        }

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
                (data != null) ? cityList(data, navigation) : <Error title={'Country not found'}/> //Display city list if results were found, else notify the user.
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
                renderItem={({item}) => (<ListEntry item={item} data={data} onPressFunction={() => navigation.navigate('City Information', {cityData: item})}/>)}
            />
        </View>
    );
}


