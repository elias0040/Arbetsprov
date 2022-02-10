import React from "react";
import styles from "../Style";
import { TouchableOpacity, Text } from "react-native";

const MenuButton = (props) => {
    return (
        <TouchableOpacity style={styles.button} onPress={props.onPressFunction}>
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    );
}

export default MenuButton;