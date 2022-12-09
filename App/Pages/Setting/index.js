import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from "react-native";
import {
    Avatar,
    ListItem,
} from '@rneui/themed';
import { SCREEN_NAMES } from '../../Navigation/AppNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function AccountScreen() {
    const navigation = useNavigation();
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    useEffect(() => {
        getData()
    }, [])
    async function getData() {
        setUser(await AsyncStorage.getItem('username'))
        setEmail(await AsyncStorage.getItem('email'))
    }
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
                        {user}
                    </Text>
                    <Text style={styles.email}>
                        {email}
                    </Text>
                </View>
                <ListItem bottomDivider onPress={() => {
                    navigation.navigate(SCREEN_NAMES.Profile)
                }}>
                    <ListItem.Content>
                        <ListItem.Title>Profile</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                <ListItem bottomDivider onPress={() => {
                    navigation.navigate(SCREEN_NAMES.History)
                }}>
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
