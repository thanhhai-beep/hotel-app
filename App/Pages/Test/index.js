import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
} from "react-native";

export default function TestScreen() {

    return (
        <View style={styles.container}>
            <Text style={styles.forgot_button}>Test page</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});
