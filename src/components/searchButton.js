import React from "react";
import styles from "../Style";
import { TouchableOpacity, Image} from "react-native";

const SearchButton = (props) => {
    return (
        <TouchableOpacity 
            style={[styles.button, {backgroundColor: '#16C79A',width: 100, height: 100, borderRadius: 80}]}

            //Redirect user depending on the boolean value of 'byCountry'
            onPress={props.onPressFunction}>
            
            <Image style={{width: '50%', height: '50%'}}source={require('../assets/search.png')}></Image>
        </TouchableOpacity>
    );
}

export default SearchButton;