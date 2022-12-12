import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Linking,
    TextInput,
    TouchableOpacity
} from "react-native";
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconI from 'react-native-vector-icons/Ionicons';

export default function ContactScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [topic, setTopic] = useState('');
    const [mess, setMess] = useState('');
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView>
                <View style={styles.contact}>
                    <Text style={{ fontSize: 18, color: "#777777" }}>Get in touch</Text>
                    <Text style={styles.title}>Contact and Access</Text>
                    <Text style={styles.desc}>
                        Officially opened in December 2019, Homie Hotel, MGallery Collection is located in the centre of Ho Chi Minh's most vibrant district, just away from Notre Dame Cathedral, Opera House, Central Post Office. history and other key tourist attractions a few kilometers. The hotel is just 20 minutes drive from Tan Son Nhat international Airport.
                    </Text>
                </View>
                <View style={styles.maps}>
                    <MapView style={{ width: "100%", height: "100%" }}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
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
                        <Text onPress={() => Linking.openURL('mailto:support@example.com?subject=SendMail&body=Description')} style={{ fontSize: 16, color: "#888888" }}>hotel@fpt.edu.vn</Text>
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
                <View style={styles.fromGroup}>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            value={name}
                            placeholder="Your name"
                            placeholderTextColor="#003f5c"
                            onChangeText={(name) => setName(name)}
                        />
                    </View>
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
                <View style={{ paddingLeft: 20, paddingRight: 20 }}>
                    <View style={styles.inputView2}>
                        <TextInput
                            style={styles.TextInput}
                            value={topic}
                            placeholder="Topic"
                            placeholderTextColor="#003f5c"
                            onChangeText={(topic) => setTopic(topic)}
                        />
                    </View>
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
                <TouchableOpacity style={styles.send}>
                    <Text style={styles.btnSend}>Send Message</Text>
                </TouchableOpacity>
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
        flexDirection: "row",
        marginTop: 30,
        paddingLeft: 20,
        paddingRight: 10
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
        marginBottom: 20,
    },
    TextInput: {
        color: "#888888"
    },
    textAreaContainer: {
        backgroundColor: "#f8f9fa",
        borderWidth: 1,
        padding: 5,
        marginLeft: 20,
        marginRight: 20,
        borderColor: "#dedede",
        borderWidth: 1,
        marginBottom: 20,
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
        borderRadius: 5
    },
    btnSend: {
        padding: 15,
        fontSize: 18,
        color: "#fff"
    }
})