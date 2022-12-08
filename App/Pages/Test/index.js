import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import Header from "../Layout/Header";
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
        <View style={styles.container}><Header />
            <Text style={styles.forgot_button}>Test pagewww</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});
