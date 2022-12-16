import { useNavigation } from '@react-navigation/native';
import React, { useState } from "react";
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
import { Dialog } from '@rneui/themed';

export default function RegisterScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [fullname, setFullname] = useState("");
    const [birthday, setBirthday] = useState('01-01-2000');
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [loading, setLoad] = useState(false);
    const navigation = useNavigation();

    const [valid1, setValid1] = useState(false)
    const [valid2, setValid2] = useState(false)
    const [valid3, setValid3] = useState(false)
    const [valid4, setValid4] = useState(false)
    const [valid5, setValid5] = useState(false)
    const [valid6, setValid6] = useState(false)
    const [valid7, setValid7] = useState(false)
    const image = { uri: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp" };

    const data = {
        username: username,
        password: password,
        email: email,
        fullname: fullname,
        phone: phone,
        gender: gender,
        birthday: birthday
    }
    const handleRegister = () => {
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (username == '' || username == '' || email == '' || fullname == '' || phone == '' || gender == '' || birthday == '') {
            if (username == '') {
                setValid1(true)
            } else { setValid1(false) }
            if (username == '') {
                setValid2(true)
            } else { setValid2(false) }
            if (email == '') {
                setValid3(true)
            } else { setValid3(false) }
            if (fullname == '') {
                setValid4(true)
            } else { setValid4(false) }
            if (phone == '') {
                setValid5(true)
            } else { setValid5(false) }
            if (gender == '') {
                setValid6(true)
            } else { setValid4(false) }
            if (birthday == '') {
                setValid7(true)
            } else { setValid5(false) }
            return
        } else {
            setValid1(false)
            setValid2(false)
            setValid3(false)
            setValid4(false)
            setValid5(false)
            setValid6(false)
            setValid7(false)
        }
        if (!regEmail.test(email)) {
            setValid3(true)
            return
        } else {
            setValid3(false)
        }
        console.log(data);
    }

    const loadingPage = () => {
        setLoad(!loading);
    };
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <ScrollView>
                    <Text style={styles.title}>REGISTER</Text>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Username: </Text>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Username"
                                placeholderTextColor="#003f5c"
                                onChangeText={(username) => setUsername(username)}
                            />
                        </View>
                        {valid1 ? <Text style={styles.validate}>Please enter your Username</Text> : ''}
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
                        {valid2 ? <Text style={styles.validate}>Please enter your Password</Text> : ''}
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
                        {valid3 ? <Text style={styles.validate}>Please enter your Email</Text> : ''}
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
                        {valid4 ? <Text style={styles.validate}>Please enter your Full Name</Text> : ''}
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Birthday:</Text>
                        <View style={styles.inputView}>
                            <DatePicker
                                style={styles.datePickerStyle}
                                date={birthday}
                                mode="date"
                                placeholder="select date"
                                format="YYYY-MM-DD"
                                minDate="1950-01-01"
                                maxDate="2004-01-01"
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
                        {valid5 ? <Text style={styles.validate}>Please enter your Birthday</Text> : ''}
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
                        {valid6 ? <Text style={styles.validate}>Please enter your Phone</Text> : ''}
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
                        {valid7 ? <Text style={styles.validate}>Please enter your Gender</Text> : ''}
                    </View>
                    <View style={styles.formGroup}>
                        <TouchableOpacity style={styles.cancelBtn} onPress={() => {
                            navigation.navigate(SCREEN_NAMES.TabBar)
                        }}>
                            <Text style={styles.loginText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
                            <Text style={styles.loginText}>Register</Text>
                        </TouchableOpacity>
                    </View>
                    <Dialog isVisible={loading} onBackdropPress={loadingPage}>
                        <Dialog.Loading />
                    </Dialog>
                </ScrollView>
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
        marginTop: 55
    },
    formGroup: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 20
    },
    label: {
        marginTop: 9,
        marginLeft: 20,
        fontWeight: "600",
        width: "20%",
    },
    inputView: {
        backgroundColor: "#fdfdfded",
        borderRadius: 8,
        height: 40,
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
    validate: {
        fontSize: 12,
        color: "#f57b51",
        width: "100%",
        marginLeft: "33%",
        marginTop: 2
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
