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
import AppNavigation from './App/Navigation/AppNavigation';
import LoginScreen from './App/Pages/Login';

export default function App() {

  return (
    <AppNavigation />
  );
}
