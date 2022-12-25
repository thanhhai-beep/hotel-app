import React, { useEffect, useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Linking,
    TextInput,
    TouchableOpacity,
    RefreshControl
} from "react-native";
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';
import { Dialog } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconI from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { feedback } from "../../repositories/SettingRepository";
import { WebView } from 'react-native-webview';


const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
export default function ContactScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [topic, setTopic] = useState('');
    const [mess, setMess] = useState('');
    const [user, setUser] = useState('');

    const [valid1, setValid1] = useState(false)
    const [valid2, setValid2] = useState(false)
    const [valid3, setValid3] = useState(false)
    const [valid4, setValid4] = useState(false)
    const [load, setLoad] = useState(false);
    const [noti, setNoti] = useState(false);
    const [notiErr, setNotiErr] = useState(false);
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        setUser(await AsyncStorage.getItem('username'))
        setEmail(await AsyncStorage.getItem('email'))
        setName(await AsyncStorage.getItem('name'))
    }
    const sendMessage = async () => {
        setLoad(true)
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (user == '' || name == '' || email == '' || topic == '' || mess == '') {
            if (name == '') {
                setValid1(true)
            } else { setValid1(false) }
            if (email == '') {
                setValid2(true)
            } else { setValid2(false) }
            if (topic == '') {
                setValid3(true)
            } else { setValid3(false) }
            if (mess == '') {
                setValid4(true)
            } else { setValid4(false) }
            wait(500).then(() => setLoad(false));
            return
        } else {
            setValid1(false)
            setValid2(false)
            setValid3(false)
            setValid4(false)
        }
        if (!regEmail.test(email)) {
            setValid2(true)
            wait(500).then(() => setLoad(false));
            return
        } else {
            setValid2(false)
        }
        var data = {
            createdBy: user,
            hoTen: name,
            email: email,
            title: topic,
            content: mess
        }
        var result = await feedback(data)
        if (result == 1) {
            wait(100).then(() => setLoad(false));
            wait(100).then(() => setNoti(true));
            wait(800).then(() => setNoti(false));
            return
        }
        wait(100).then(() => setNotiErr(false));
        wait(800).then(() => setNotiErr(false));
    }
    const tonggleLoad = () => {
        setLoad(!load)
    }
    const tonggleNoti = () => {
        setNoti(!noti)
    }
    const tonggleNotiErr = () => {
        setNotiErr(!notiErr)
    }
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        getData()
        wait(2000).then(() => setRefreshing(false));
    }, []);
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }>
                <View style={styles.contact}>
                    <Text style={{ fontSize: 18, color: "#777777" }}>Get in touch</Text>
                    <Text style={styles.title}>Contact and Access</Text>
                    <Text style={styles.desc}>
                        Officially opened in December 2019, Bambuu Hotel, MGallery Collection is located in the centre of Ho Chi Minh's most vibrant district, just away from Notre Dame Cathedral, Opera House, Central Post Office. history and other key tourist attractions a few kilometers. The hotel is just 20 minutes drive from Tan Son Nhat international Airport.
                    </Text>
                </View>
                <View style={styles.maps}>
                    <WebView
                        originWhitelist={['*']}
                        style={{ width: "100%", height: "100%" }}
                        source={{
                            html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.32531626684!2d106.66410831465521!3d10.786376992314766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed23c80767d%3A0x5a981a5efee9fd7d!2zNTkwIMSQLiBDw6FjaCBN4bqhbmcgVGjDoW5nIDgsIFBoxrDhu51uZyAxMSwgUXXhuq1uIDMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1671583550520!5m2!1svi!2s" style="width:100%;height:100%;border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>`
                        }} />
                </View>
                <View style={styles.contactFooter}>
                    <Icon name="phone-volume" style={styles.icon} />
                    <View style={styles.tel}>
                        <Text style={{ fontSize: 20, fontWeight: "500" }}>Call Us</Text>
                        <Text onPress={() => { Linking.openURL('tel:0837418189'); }} style={{ fontSize: 16, color: "#888888" }}>+84 37418189</Text>
                    </View>
                </View>
                <View style={styles.contactFooter}>
                    <IconI name="mail" style={styles.icon} />
                    <View style={styles.tel}>
                        <Text style={{ fontSize: 20, fontWeight: "500" }}>Email Us</Text>
                        <Text onPress={() => Linking.openURL('mailto:BambuuHotel@fpt.edu.vn?subject=SendMail&body=Description')} style={{ fontSize: 16, color: "#888888" }}>hotel@fpt.edu.vn</Text>
                    </View>
                </View>
                <View style={styles.contactFooter}>
                    <IconI name="location" style={styles.icon} />
                    <View style={styles.tel}>
                        <Text style={{ fontSize: 20, fontWeight: "500" }}>Address</Text>
                        <Text style={{ fontSize: 16, color: "#888888", width: "66%", }}>
                            590 Cach Mang Thang 8, Ward 11, District 3, Ho Chi Minh City.
                        </Text>
                    </View>
                </View>
                <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 35, marginBottom: 20 }}>
                    <View style={styles.inputView2}>
                        <TextInput
                            style={styles.TextInput}
                            value={name}
                            placeholder="Your name"
                            placeholderTextColor="#888888"
                            onChangeText={(name) => setName(name)}
                        />
                    </View>
                    {valid1 ? <Text style={styles.validate}>Please enter your name</Text> : ''}
                </View>
                <View style={styles.fromGroup}>
                    <View style={styles.inputView2}>
                        <TextInput
                            style={styles.TextInput}
                            value={email}
                            placeholder="Email"
                            placeholderTextColor="#888888"
                            onChangeText={(email) => setEmail(email)}
                        />
                    </View>
                    {valid2 ? <Text style={styles.validate}>Please enter your email</Text> : ''}
                </View>
                <View style={styles.fromGroup}>
                    <View style={styles.inputView2}>
                        <TextInput
                            style={styles.TextInput}
                            value={topic}
                            placeholder="Topic"
                            placeholderTextColor="#888888"
                            onChangeText={(topic) => setTopic(topic)}
                        />
                    </View>
                    {valid3 ? <Text style={styles.validate}>Please enter topic</Text> : ''}
                </View>
                <View style={styles.textAreaContainer} >
                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        value={mess}
                        placeholder="Message"
                        placeholderTextColor="grey"
                        numberOfLines={5}
                        multiline={true}
                        onChangeText={(mess) => setMess(mess)}
                    />
                </View>
                {valid4 ? <Text style={styles.validateText}>Please enter message</Text> : ''}
                <TouchableOpacity style={styles.send} onPress={sendMessage}>
                    <Text style={styles.btnSend}>Send Message</Text>
                </TouchableOpacity>
                <Dialog isVisible={load} onBackdropPress={tonggleLoad}>
                    <Dialog.Loading />
                </Dialog>
                <Dialog isVisible={noti} onBackdropPress={tonggleNoti}>
                    <View style={styles.notify}>
                        <IconI name="checkmark-done" style={styles.iconNoti} />
                        <Text style={styles.notiText}>Successful</Text>
                    </View>
                </Dialog>
                <Dialog isVisible={notiErr} onBackdropPress={tonggleNotiErr}>
                    <View style={styles.notify}>
                        <IconI name="ios-information-circle-outline" style={styles.iconNotiErr} />
                        <Text style={styles.notiTextErr}>Error</Text>
                    </View>
                </Dialog>
                <Footer />
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingBottom: 60,
        backgroundColor: "#ffffff"
    },
    contact: {
        padding: 20
    },
    title: {
        fontSize: 24,
    },
    desc: {
        paddingTop: 10,
        color: "#888888",
        fontSize: 15
    },
    maps: {
        width: "100%",
        height: 250,
        marginBottom: 15
    },
    contactFooter: {
        padding: 20,
        paddingBottom: 0,
        paddingTop: 10,
        flexDirection: "row",
    },
    icon: {
        fontSize: 25,
        color: "#f57b51",
        width: 40,
        top: 8,
    },
    fromGroup: {
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 20
    },
    inputView: {
        backgroundColor: "#f8f9fa",
        width: "47%",
        height: 50,
        marginRight: 10,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        borderColor: "#dedede",
        borderWidth: 1,
        marginBottom: 20,
    },
    inputView2: {
        backgroundColor: "#f8f9fa",
        width: "100%",
        height: 50,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        borderColor: "#dedede",
        borderWidth: 1,
        marginBottom: 0,
    },
    TextInput: {
        color: "#555555",
        fontWeight: "500"
    },
    textAreaContainer: {
        backgroundColor: "#f8f9fa",
        borderWidth: 1,
        padding: 5,
        marginLeft: 20,
        marginRight: 20,
        borderColor: "#dedede",
        borderWidth: 1,
        borderRadius: 5,
    },
    textArea: {
        height: 100,
        justifyContent: "flex-start",
    },
    send: {
        backgroundColor: "#f57b51",
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginTop: 25
    },
    btnSend: {
        padding: 15,
        fontSize: 18,
        color: "#fff"
    },
    validate: {
        width: "100%",
        alignItems: "center",
        fontSize: 12,
        color: "#f57b51",
        marginTop: 3,
        marginLeft: 5
    },
    validateText: {
        width: "100%",
        alignItems: "center",
        fontSize: 12,
        color: "#f57b51",
        marginTop: 3,
        marginLeft: 25,
    },
    notify: {
        justifyContent: "center",
        alignItems: "center"
    },
    iconNoti: {
        fontSize: 40,
        color: "#68B984"
    },
    notiText: {
        fontSize: 20,
        color: "#68B984"
    },
    iconNotiErr: {
        fontSize: 40,
        color: "#CF0A0A"
    },
    notiTextErr: {
        fontSize: 20,
        color: "#CF0A0A"
    }
})