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

export default function LoginScreen() {
    const [username, setUsername] = useState('admin');
    const [password, setPassword] = useState("12345678");
    const navigation = useNavigation();
    const [loading, setLoad] = useState(false);
    useEffect(() => {
        checkLogin()
    }, [])
    async function checkLogin() {
        setLoad(true)
        var login = await AsyncStorage.getItem('loginStatus')
        if (login != 1) {
            setLoad(false)
            navigation.navigate(SCREEN_NAMES.TabBar)
        }
    }
    const handleLogin = async () => {
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
            setLoad(false)
            navigation.navigate(SCREEN_NAMES.TabBar)
        }
    }
    const loadingPage = () => {
        setLoad(!loading);
    };
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
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
            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>

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
            <Dialog isVisible={loading} onBackdropPress={loadingPage}>
                <Dialog.Loading />
            </Dialog>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#50a3a2",
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
        marginBottom: 20,
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
});
