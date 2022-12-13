import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Linking,
    TextInput,
    TouchableOpacity
} from "react-native";
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconI from 'react-native-vector-icons/Ionicons';

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView>
                <Text>About Us</Text>
                <Footer />
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingBottom: 60,
        // backgroundColor: "#ffffff"
    },
})