import React from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";

export default function InputBox({ placeholder, icon, secureTextEntry, value, onChangeText }) {
    return (
        <View style={styles.inputBox}>
            <Ionicons name={icon} size={24} color="black" />
            <TextInput
            placeholder={placeholder}
            style={styles.input}
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={onChangeText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputBox: {
        flexDirection: 'row',
    }
})