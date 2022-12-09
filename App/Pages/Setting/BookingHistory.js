import React, { useState } from "react";
import Header from "../Layout/Header";
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from "react-native";
import Footer from "../Layout/Footer";

export default function HistoryScreen() {

    return (
        <View style={styles.container}><Header />
            <ScrollView style={styles.history}>
                <Text style={styles.title}>Check-out history</Text>
                <Footer />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 60
    },
    title: {
        fontSize: 22,
        alignItems: "center",
        textAlign: "center",
        marginTop: 25
    }
});
