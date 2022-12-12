import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
} from "react-native";
import { SCREEN_NAMES } from '../../Navigation/AppNavigation';
import { login } from '../../repositories/SettingRepository';
import { Dialog } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ContactScreen() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.title}>Contact</Text>
        </View>
    )
}