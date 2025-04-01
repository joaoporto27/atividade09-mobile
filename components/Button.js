import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Button({ text}) {
    return (
        <TouchableOpacity style={styles.button} >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "black",
        padding: 10,
        marginTop: 20,
        width: 100,
        display: "flex",
        alignItems: "center",   
    },
    text: {
        color: "white",
    },
});