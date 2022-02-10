import {Text, View, ActivityIndicator, ImageBackground} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';

import styles from '../Style';
import { getCityBanner } from '../Functions';

export default function CityInformation({route, navigation}){
    const {input, cityData} = route.params; //Grab user input sent through navigation parameters
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    const fetchCityData = async () => {
        //Initalize URL that data will be fetched from
        const api_url = 'http://api.geonames.org/searchJSON?name_equals=' + input + '&orderby=population&featureClass=P&featureCode=PPL&featureCode=PPLA&featureCode=PPLA2&featureCode=PPLA3&featureCode=PPLA4&featureCode=PPLC&maxRows=1&username=weknowit';

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
        if(cityData === null){
            fetchCityData();
        }else{
            setData(cityData);
            setLoading(false);
        }

    }, []);

    return(
        <LinearGradient colors={['#4da7ac', '#0097ff']} style={styles.container}>
              {loading ?  <ActivityIndicator size='large' color='white'/> : //If loading is true display loading indicator
                (data === null) ? NoResultsFound() : <View style={[styles.container, {width: '100%'}]}>{ResultsFound(data)}</View> //Else display results if found
              }
        </LinearGradient>
    );
}

//View to be displayed if results are found
function ResultsFound(data){
    return(
      <View style={[styles.container, {width: '100%'}]}>
          <View style={styles.titleContainer}>
            <Text style={styles.subtitle}> {data.countryName} </Text>
            <Text style={styles.title}> {data.name} </Text> 
          </View>

          <LinearGradient colors={['white', '#e8e8e8']} start={{x : 0.8, y: 0.8}} end={{x: 1, y: 1}} style={styles.infoContainer}>
            <Text style={[styles.subtitle, {color: 'grey'}]}> Population: </Text>  
            <Text style={{color: '#3EC1D3', fontSize: 60,}}> {data.population} </Text>  

            <ImageBackground source={getCityBanner(data.population)} style={{width: '100%', height: 120, position: 'absolute', bottom: 0}}>
                <LinearGradient start={{x: 0.5, y: 1}} end={{x: 0.9, y: 0.2}} colors={['white', 'transparent']} style={{width: '100%', height: '100%'}}/>
            </ImageBackground>
          </LinearGradient>

            

      </View>
    );
}

//View to be displayed if results are not foond
function NoResultsFound(){
    return(
        <Text style={styles.title}>No results found</Text>
    );
}