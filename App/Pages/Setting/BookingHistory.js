import React, { useState } from "react";
import Header from "../Layout/Header";
import {
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function HistoryScreen() {

    return (
        <View style={styles.container}><Header />
            <Text style={styles.forgot_button}>History</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});
