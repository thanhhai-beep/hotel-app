import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import DatePicker from 'react-native-datepicker';

export default function RegisterScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [fullname, setFullname] = useState("");
    const [birthday, setBirthday] = useState('01-01-2000');
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const image = { uri: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp" };
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <StatusBar style="auto" />
                <Text style={styles.title}>REGISTER</Text>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Username:</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Username"
                            placeholderTextColor="#003f5c"
                            onChangeText={(username) => setUsername(username)}
                        />
                    </View>
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Password:</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Password"
                            placeholderTextColor="#003f5c"
                            secureTextEntry={true}
                            onChangeText={(password) => setPassword(password)}
                        />
                    </View>
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Email:</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
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
                            placeholder="Phone"
                            placeholderTextColor="#003f5c"
                            onChangeText={(phone) => setPhone(phone)}
                        />
                    </View>
                </View>
                <View style={styles.formGroup}>
                    <TouchableOpacity style={styles.cancelBtn}>
                        <Text style={styles.loginText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.loginText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center",
        width: "100%",
    },
    title: {
        fontSize: 28,
        color: "#fff",
        bottom: "2%",
        alignItems: "center",
        width: "100%",
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
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
