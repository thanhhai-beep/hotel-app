import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    RefreshControl,
} from "react-native";
import DatePicker from 'react-native-datepicker';
import { SCREEN_NAMES } from '../../Navigation/AppNavigation';
import RNPickerSelect from 'react-native-picker-select';
import Header from '../Layout/Header';
import { Dialog } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { updateProfile, profile } from '../../repositories/SettingRepository';
import { FA5Style } from 'react-native-vector-icons/FontAwesome5';


const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
export default function ProfileScreen(props) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [fullname, setFullname] = useState("");
    const [birthday, setBirthday] = useState('2000-01-01');
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("Famale");
    const [loading, setLoad] = useState(false);
    const [noti, setNoti] = useState(false);
    const [notiErr, setNotiErr] = useState(false);
    const navigation = useNavigation();
    useEffect(() => {
        setData()
    }, [props.route.params]);
    const setData = async () => {
        setUsername(await AsyncStorage.getItem('username'))
        setEmail(await AsyncStorage.getItem('email'))
        setFullname(await AsyncStorage.getItem('name'))
        setBirthday(await AsyncStorage.getItem('birthday'))
        setPhone(await AsyncStorage.getItem('phone'))
    }

    const getProfile = async () => {
        var pro = await profile(username)
        if (pro) {
            setUsername(await AsyncStorage.setItem('username', pro.tenDangNhap))
            setEmail(await AsyncStorage.setItem('email', pro.email))
            setFullname(await AsyncStorage.setItem('name', pro.hoTen))
            setBirthday(await AsyncStorage.setItem('birthday', pro.ngaySinh))
            setPhone(await AsyncStorage.setItem('phone', pro.soDT))
            setGender(pro.gioiTinh)
        }
        setData()
    }

    const sendUpdate = async () => {
        setLoad(true)
        var data = {
            username: username,
            fullName: fullname,
            phoneNumber: phone,
            email: email,
            birth: birthday,
            gender: gender
        }
        var result = await updateProfile(data)
        if (result == 1) {
            setLoad(false)
            setNoti(true)
            getProfile()
            setNoti(false)
            return
        }
        setData()
        setLoad(false)
        setNotiErr(true);
        wait(1000).then(() => setNotiErr(false))
    }

    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        setData()
        wait(1000).then(() => setRefreshing(false));
    }, []);

    const loadingPage = () => {
        setLoad(!loading);
    };
    const notiPage = () => {
        setNoti(!noti);
    };
    const notiErrPage = () => {
        setNotiErr(!notiErr);
    };
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }>
                <Text style={styles.title}>PROFILE</Text>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Username:</Text>
                    <View style={styles.nameView}>
                        <Text stysle={styles.uname}>{username}</Text>
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
                    <TouchableOpacity style={styles.loginBtn} onPress={sendUpdate}>
                        <Text style={styles.loginText}>SAVE</Text>
                    </TouchableOpacity>
                </View>
                <Dialog isVisible={loading} onBackdropPress={loadingPage}>
                    <Dialog.Loading />
                </Dialog>
                <Dialog isVisible={noti} onBackdropPress={notiPage}>
                    <Text style={{ fontSize: 25, color: "#68B984", fontWeight: "500", padding: 10, textAlign: "center" }}>Successfull</Text>
                </Dialog>
                <Dialog isVisible={notiErr} onBackdropPress={notiErrPage}>
                    <Text style={{ fontSize: 25, color: "#DC3535", fontWeight: "500", padding: 10, textAlign: "center" }}>Update failed!</Text>
                </Dialog>
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
        backgroundColor: "#fdfdfd",
        borderRadius: 8,
        height: 40,
        marginBottom: 20,
        alignItems: "center",
        lineHeight: 84,
        marginLeft: 20,
        width: "65%"
    },
    nameView: {
        backgroundColor: "#D8D9CF",
        borderRadius: 8,
        height: 40,
        marginBottom: 20,
        alignItems: "center",
        lineHeight: 84,
        marginLeft: 20,
        width: "65%",
        paddingTop: 10
    },
    inputViewSelect: {
        backgroundColor: "#fdfdfd",
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
    uname: {
        top: 20
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
