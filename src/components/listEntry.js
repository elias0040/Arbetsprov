import React from "react";
import styles from "../Style";
import { TouchableOpacity, Text, ImageBackground} from "react-native";
import { getCityBanner } from "../Functions";
import { LinearGradient } from "expo-linear-gradient";

const ListEntry = (props) => {
    const {item, data} = props;

    return (
        <TouchableOpacity style={{width: '100%', height: 120, marginBottom: 10, borderRadius: 30}} onPress={props.onPressFunction}>
            <ImageBackground source={getCityBanner(item.population)} style={{width: '100%', height: '100%'}} imageStyle={{borderRadius: 30}}>
                <LinearGradient start={{x: 0.6, y: 0.5}} end={{x: 0.9, y: 0.9}} colors={['white', 'transparent']} style={styles.listEntry} >
                    <Text style={styles.listLabel}> # {(data.indexOf(item) + 1)}</Text>
                    <Text style={styles.buttonText}>{item.name}</Text>
                    
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    );
}

export default ListEntry;