import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default () => {
    return (
        <View style={styles.headerFooterStyle}>
            <Text style={styles.textStyle}>This is Footer</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    headerFooterStyle: {
        width: '100%',
        backgroundColor: '#212121',
        padding: 30
    },
    textStyle: {
        color: "#fff"
    }
});