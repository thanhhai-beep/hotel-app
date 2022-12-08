import React, { useState } from "react";
import Header from "../Layout/Header";
import {
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function ProfileScreen() {

    return (
        <View style={styles.container}><Header />
            <Text style={styles.forgot_button}>Profile</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});
