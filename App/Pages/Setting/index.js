import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    RefreshControl
} from "react-native";
import {
    Avatar,
    ListItem,
    Dialog,
} from '@rneui/themed';
import { SCREEN_NAMES } from '../../Navigation/AppNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';


const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
export default function AccountScreen() {
    const navigation = useNavigation();
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [modal, setModal] = useState(false);
    const [logoutModal, setLogoutModal] = useState(false);
    useEffect(() => {
        getData()
        checkLogin()
    }, [])
    async function getData() {
        setUser(await AsyncStorage.getItem('username'))
        setEmail(await AsyncStorage.getItem('email'))
    }
    const check = () => {
        setModal(!modal);
    };
    async function checkLogin() {
        var checkStatus = await AsyncStorage.getItem('loginStatus')
        if (checkStatus != 1) {
            check()
        }
    }
    function login() {
        setModal(false)
        navigation.navigate(SCREEN_NAMES.Login)
    }
    const checkOut = () => {
        setLogoutModal(!logoutModal);
    }
    async function logout() {
        await AsyncStorage.removeItem('username')
        await AsyncStorage.removeItem('name')
        await AsyncStorage.removeItem('email')
        await AsyncStorage.removeItem('birthday')
        await AsyncStorage.removeItem('phone')
        await AsyncStorage.removeItem('loginStatus')
        await AsyncStorage.removeItem('gender')
        setLogoutModal(false)
        navigation.navigate(SCREEN_NAMES.Login)
    }

    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        await getData()
        wait(500).then(() => setRefreshing(false));
    }, []);

    return (
        <>
            {modal ? <View style={styles.container}>
                <Dialog
                    isVisible={modal}
                    onBackdropPress={check}
                >
                    <Dialog.Title title="You are not logged in" />
                    <Dialog.Actions>
                        <Dialog.Button title="LOGIN" onPress={login}
                        />
                        <Dialog.Button title="CANCEL" onPress={check} />
                    </Dialog.Actions>
                </Dialog>
            </View> : <View style={styles.container}>
                <ScrollView style={styles.scrollView} refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }>
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
                        navigation.navigate({
                            name: 'Profile',
                            params: {
                                user: user
                            }
                        })
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
                    <ListItem bottomDivider onPress={checkOut}>
                        <ListItem.Content>
                            <ListItem.Title>Logout</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                    <Dialog
                        isVisible={logoutModal}
                        onBackdropPress={checkOut}
                    >
                        <Dialog.Title title="You definitely want to sign out" />
                        <Dialog.Actions>
                            <Dialog.Button title="LOGOUT" onPress={logout}
                            />
                            <Dialog.Button title="CANCEL" onPress={checkOut} />
                        </Dialog.Actions>
                    </Dialog>
                </ScrollView>
            </View>}
        </>
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
    scrollView: {
        paddingBottom: 150
    }
});
