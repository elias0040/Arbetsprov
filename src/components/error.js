import React from "react";
import styles from "../Style";
import { TouchableOpacity, Text } from "react-native";

const Error = (props) => {
    return (
        <Text style={styles.title}>{props.title}</Text>
    );
}

export default Error;