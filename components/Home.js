import {Text, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from '../Style';

export default function Home({navigation}){

    return(
        
        <LinearGradient colors={['#4da7ac', '#0097ff']} style={styles.container}>
            <Text style={styles.title}>CityPop</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Search', {byCountry: false})}>
                <Text style={styles.buttonText}>Search by city</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Search', {byCountry: true})}>
                <Text style={styles.buttonText}>Search by country</Text>
                
            </TouchableOpacity>
        </LinearGradient>
    );
}