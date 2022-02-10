import react from 'react';
import {Text, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MenuButton from '../components/menuButton';

import styles from '../Style';

export default function Home({navigation}){

    return(
        
        <LinearGradient colors={['#4da7ac', '#0097ff']} style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>CityPop</Text>
            </View>


            <MenuButton title={'Search by City'} onPressFunction={() => navigation.navigate('Search', {byCountry: false})}/>

            <MenuButton title={'Search by Country'} onPressFunction={() => navigation.navigate('Search', {byCountry: true})}/>
        </LinearGradient>
    );
}