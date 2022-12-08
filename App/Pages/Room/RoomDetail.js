import React, { useState } from "react";
import Header from "../Layout/Header";
import {
    StyleSheet,
    Text,
    View,
} from "react-native";
import Footer from "../Layout/Footer";

export default function RoomScreen() {

    return (
        <View style={styles.container}>
            <Header />
            <Text style={styles.forgot_button}>Room Details</Text>
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({

});
