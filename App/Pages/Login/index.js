import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { SCREEN_NAMES } from '../../Navigation/AppNavigation';
import { login } from '../../repositories/SettingRepository';
import { Dialog } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';

export default function LoginScreen() {
    const [username, setUsername] = useState('thanhhai02');
    const [password, setPassword] = useState("@Hai2002");
    const [valid1, setValid1] = useState(false);
    const [valid2, setValid2] = useState(false);
    const navigation = useNavigation();
    const [loading, setLoad] = useState(false);
    useEffect(() => {
        checkLogin()
    }, [])
    async function checkLogin() {
        var login = await AsyncStorage.getItem('loginStatus')
        if (login) {
            navigation.navigate(SCREEN_NAMES.TabBar)
        }
    }
    const handleLogin = async () => {
        if (username == '' || password == '') {
            if (username == '') {
                setValid1(true)
            } else { setValid1(false) }
            if (password == '') {
                setValid2(true)
            } else { setValid2(false) }
        } else {
            setValid1(false)
            setValid2(false)
        }
        setLoad(true)
        const data = {
            username: username,
            password: password
        }
        const result = await login(data);
        if (result) {
            await AsyncStorage.setItem('username', result.username)
            await AsyncStorage.setItem('name', result.fullName)
            await AsyncStorage.setItem('email', result.email)
            await AsyncStorage.setItem('birthday', result.birthday)
            await AsyncStorage.setItem('phone', result.phoneNumber)
            await AsyncStorage.setItem('loginStatus', "1")
            await AsyncStorage.setItem('gender', result.gender)
            setLoad(false)
            navigation.navigate(SCREEN_NAMES.TabBar)
            return
        }
        setLoad(false)
    }
    const loadingPage = () => {
        setLoad(!loading);
    };
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <TouchableOpacity onPress={() => {
                navigation.navigate(SCREEN_NAMES.Account)
            }} style={{ top: 40, left: 20, height: 60 }}>
                <Text><Icon name='md-arrow-back-sharp' style={{ fontSize: 30 }} /></Text>
            </TouchableOpacity>
            <View style={styles.containerItem}>
                <Text style={styles.title}>Bambuu Hotels</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        value={username}
                        placeholder="Username"
                        placeholderTextColor="#003f5c"
                        onChangeText={(username) => setUsername(username)}
                    />
                </View>
                {valid1 ? <Text style={styles.validate}>Please enter your Username</Text> : ''}
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        value={password}
                        placeholder="Password"
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>
                {valid2 ? <Text style={styles.validate}>Please enter your Password</Text> : ''}

                <TouchableOpacity style={styles.loginBtn}
                    onPress={handleLogin}
                >
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate(SCREEN_NAMES.Register)
                }}>
                    <Text style={{ paddingTop: 15 }}>Register</Text>
                </TouchableOpacity>
            </View>
            <Dialog isVisible={loading} onBackdropPress={loadingPage}>
                <Dialog.Loading />
            </Dialog>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#50a3a2"
    },
    containerItem: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        overflow: "hidden",
    },
    title: {
        fontSize: 25,
        color: "#fff",
        bottom: "7%",
    },
    inputView: {
        backgroundColor: "#fdfdfded",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 5,
        marginTop: 10,
        alignItems: "center",
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 10,
    },
    forgot_button: {
        height: 30,
        marginTop: 15,
        marginBottom: 30,
    },
    loginBtn: {
        width: "70%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#fdfdfded",
    },
    loginText: {
        color: "#53e3a6",
    },
    validate: {
        fontSize: 12,
        color: "red",
        marginBottom: 16,
    },
    iconBack: {
        bottom: 80,
        right: 110,
        width: 100,
        height: 100,
    }
});
