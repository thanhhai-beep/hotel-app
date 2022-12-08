
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from "react-native";
import {
    Avatar,
    ListItem,
    Button
} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function AccountScreen() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.accountTop}>
                    <Avatar
                        size={60}
                        rounded
                        source={{ uri: 'https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg' }}
                    />
                    <Text style={styles.fullName}>
                        Thanh Hai
                    </Text>
                    <Text style={styles.email}>
                        dohai30112002@gmail.com
                    </Text>
                </View>
                <ListItem bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>Profile</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                <ListItem bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>Booking history</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                <ListItem bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>Logout</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    accountTop: {
        alignItems: "center",
        paddingTop: 40,
        paddingBottom: 40
    },
    fullName: {
        fontSize: 17,
        marginTop: 10,
        fontWeight: "500",
        marginBottom: 5
    },

});
