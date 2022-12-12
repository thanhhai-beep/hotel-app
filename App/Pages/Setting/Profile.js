import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    ScrollView
} from "react-native";
import DatePicker from 'react-native-datepicker';
import { SCREEN_NAMES } from '../../Navigation/AppNavigation';
import RNPickerSelect from 'react-native-picker-select';
import Header from '../Layout/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ProfileScreen() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [fullname, setFullname] = useState("");
    const [birthday, setBirthday] = useState('01-01-2000');
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const navigation = useNavigation();
    useEffect(() => {
        setData();
    }, [])
    const setData = async () => {
        setUsername(await AsyncStorage.getItem('username'))
        setEmail(await AsyncStorage.getItem('email'))
        setFullname(await AsyncStorage.getItem('name'))
        setBirthday(await AsyncStorage.getItem('birthday'))
        setPhone(await AsyncStorage.getItem('phone'))
    }
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView>
                <Text style={styles.title}>PROFILE</Text>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Username:</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            value={username}
                            placeholder="Username"
                            placeholderTextColor="#003f5c"
                            onChangeText={(username) => setUsername(username)}
                        />
                    </View>
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Email:</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            value={email}
                            placeholder="Email"
                            placeholderTextColor="#003f5c"
                            onChangeText={(email) => setEmail(email)}
                        />
                    </View>
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Full Name:</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            value={fullname}
                            placeholder="Full Name"
                            placeholderTextColor="#003f5c"
                            onChangeText={(fullname) => setFullname(fullname)}
                        />
                    </View>
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Birthday:</Text>
                    <View style={styles.inputView}>
                        <DatePicker
                            style={styles.datePickerStyle}
                            date={birthday}
                            mode="date"
                            placeholder="select date"
                            format="DD/MM/YYYY"
                            minDate="01-01-1900"
                            maxDate="01-01-2004"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    right: -40,
                                    top: 4,
                                    marginLeft: 0,
                                },
                                dateInput: {
                                    borderColor: "gray",
                                    alignItems: "flex-start",
                                    borderWidth: 0,
                                    position: 'absolute',

                                },
                                placeholderText: {
                                    fontSize: 15,
                                    color: "gray"
                                },
                                dateText: {
                                    fontSize: 15,
                                }
                            }}
                            onDateChange={(birthday) => {
                                setBirthday(birthday);
                            }}
                        />
                    </View>
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Phone:</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            value={phone}
                            placeholder="Phone"
                            placeholderTextColor="#003f5c"
                            onChangeText={(phone) => setPhone(phone)}
                        />
                    </View>
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Gender:</Text>
                    <View style={styles.inputViewSelect}>
                        <RNPickerSelect
                            onValueChange={(value) => setGender(value)}
                            items={[
                                { label: 'Famale', value: 'Famale' },
                                { label: 'Male', value: 'Male' },
                            ]}
                        />
                    </View>
                </View>
                <View style={styles.formGroup}>
                    <TouchableOpacity style={styles.cancelBtn} onPress={() => {
                        navigation.navigate(SCREEN_NAMES.Account)
                    }}>
                        <Text style={styles.loginText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.loginText}>SAVE</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 28,
        color: "#777777",
        bottom: "2%",
        alignItems: "center",
        width: "100%",
        lineHeight: 60,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 30
    },
    formGroup: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    label: {
        marginTop: 12,
        marginLeft: 20,
        fontWeight: "600",
        width: "20%",
    },
    inputView: {
        backgroundColor: "#fdfdfded",
        borderRadius: 8,
        height: 40,
        marginBottom: 20,
        alignItems: "center",
        lineHeight: 84,
        marginLeft: 20,
        width: "65%"
    },
    inputViewSelect: {
        backgroundColor: "#fdfdfded",
        borderRadius: 8,
        height: 40,
        marginBottom: 20,
        alignItems: "center",
        lineHeight: 84,
        width: "65%",
        marginLeft: 20,
        paddingTop: 10,
        paddingLeft: 100
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 10,
    },
    cancelBtn: {
        marginTop: 20,
        marginLeft: 20,
        width: "40%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        backgroundColor: "#979796",

    },
    loginBtn: {
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#14a44d",
        marginLeft: 30,
        width: "40%",
    },
    loginText: {
        color: "#f5f5f5",
        fontWeight: "bold",
    },
});
