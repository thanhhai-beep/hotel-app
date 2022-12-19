import React from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    ImageBackground,
} from "react-native";
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconI from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialIcons';
import { BASEAPI } from '@env';

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView>
                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: "500" }}>Best Homie Hotel in HCM since 2000. Our hotel has been present for over 22 years.</Text>
                    <Text style={{ color: "#888888", marginTop: 10 }} >
                        Homie hotel is uniquely decorated in Asian style according to three-star standard, located in the center of Cach Mang Thang 8 Street, District 3. We combine a business strategy with more than 20 years of the hospitality industry, embrace new opportunities and distribution channels to expand internet technology for hotel to give consumers direct access easier.
                    </Text>
                    <Text style={{ color: "#888888", marginTop: 10 }}>
                        Homie Hotel aims to be one of the leading hotels in Vietnam providing hotel reservations and services for customers via internet. Customers going on a business or entertaining will surely be impressed with the hospitality, professional service and convenience with Homie Hotel's motto: "The spirit of Vietnamese hospitality"
                    </Text>
                </View>
                <View style={styles.service}>
                    <ImageBackground source={{ uri: `${BASEAPI}/images/slide1.jpg` }} resizeMode="cover" style={styles.image}>
                        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "500", paddingTop: 55 }}>Doing the right thing, at the right time</Text>
                        <View style={styles.conten}>
                            <View style={styles.item}>
                                <View style={styles.content}>
                                    <IconI name='document-text' style={styles.icon} />
                                    <Text style={{ fontSize: 16 }}>Welcome Drink</Text>
                                </View>
                                <Text style={{ color: "#888888", paddingLeft: 10, paddingTop: 5, fontSize: 12 }}>
                                    The bar is in order to people can relax or work in the elegant atmosphere with harmonious music.
                                </Text>
                            </View>
                            <View style={styles.item}>
                                <View style={styles.content}>
                                    <Icon name='spa' style={styles.icon} />
                                    <Text style={{ fontSize: 16 }}>Spa</Text>
                                </View>
                                <Text style={{ color: "#888888", paddingLeft: 10, paddingTop: 5, fontSize: 12 }}>
                                    Our method offers a wide range of massage and beauty treatments to help you recover the balance of your body.
                                </Text>
                            </View>
                        </View>
                        <View style={styles.conten}>
                            <View style={styles.item}>
                                <View style={styles.content}>
                                    <IconI name='document-text' style={styles.icon} />
                                    <Text style={{ fontSize: 16 }}>Welcome Drink</Text>
                                </View>
                                <Text style={{ color: "#888888", paddingLeft: 10, paddingTop: 5, fontSize: 12 }}>
                                    The bar is in order to people can relax or work in the elegant atmosphere with harmonious music.
                                </Text>
                            </View>
                            <View style={styles.item}>
                                <View style={styles.content}>
                                    <Icon name='spa' style={styles.icon} />
                                    <Text style={{ fontSize: 16 }}>Spa</Text>
                                </View>
                                <Text style={{ color: "#888888", paddingLeft: 10, paddingTop: 5, fontSize: 12 }}>
                                    Our method offers a wide range of massage and beauty treatments to help you recover the balance of your body.
                                </Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.uorHotel}>
                    <Text style={{ fontSize: 20 }}>
                        Our hotel is a great destination for you! Relax & Enjoy your Holiday
                    </Text>
                    <Text style={{ color: "#888888", marginTop: 10 }}>
                        Hotel rooms have everything you need for a pleasant stay: large comfortable beds covered with special bedspreads that get made by themselves, and bathrooms that are clean and shiny. The pictures on the wall are always properly aligned, and everything always functions perfectly. Someone else makes sure that everything if functional, neat and tidy only for you. A hotel room is made to accommodate you in the best possible way, to offer everything you need and to spare you from anything that could bother you.
                    </Text>
                    <View style={{ flexDirection: "row", paddingTop: 20 }}>
                        <View style={styles.outItem}>
                            <Icon name='users' style={{ color: "#f57b51", fontSize: 16 }} />
                            <Text style={{ fontSize: 25, paddingTop: 10 }}>1200+</Text>
                            <Text style={{ color: "#888888" }}>Happy Clients</Text>
                        </View>
                        <Text style={{ width: "4%", }} />
                        <View style={styles.outItem}>
                            <Icon name='camera' style={{ color: "#f57b51", fontSize: 16 }} />
                            <Text style={{ fontSize: 25, paddingTop: 10 }}>18k+</Text>
                            <Text style={{ color: "#888888" }}>Luxury Rooms</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", paddingTop: 20 }}>
                        <View style={styles.outItem}>
                            <IconM name='badge' style={{ color: "#f57b51", fontSize: 16 }} />
                            <Text style={{ fontSize: 25, paddingTop: 10 }}>158</Text>
                            <Text style={{ color: "#888888" }}>Staffs</Text>
                        </View>
                        <Text style={{ width: "4%", }} />
                        <View style={styles.outItem}>
                            <IconI name='ios-chatbubble-ellipses' style={{ color: "#f57b51", fontSize: 16 }} />
                            <Text style={{ fontSize: 25, paddingTop: 10 }}>879+</Text>
                            <Text style={{ color: "#888888" }}>Services</Text>
                        </View>
                    </View>
                </View>
                <Footer />
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 60,
        backgroundColor: "#ffffff"
    },
    service: {
        width: "100%",
        height: 380,

    },
    image: {
        width: "100%",
        height: "100%",
        alignItems: "center"
    },
    conten: {
        flexDirection: "row",
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10
    },
    item: {
        width: "50%",
        backgroundColor: "#fff",
        paddingTop: 10,
        marginRight: "1%",
        marginLeft: "1%",
        borderRadius: 3,
        paddingBottom: 10
    },
    content: {
        flexDirection: "row"
    },
    icon: {
        width: 30,
        paddingLeft: 10,
        fontSize: 15,
        color: "#f57b51"
    },
    uorHotel: {
        padding: 20,
        backgroundColor: "#f5f5f6"
    },
    outItem: {
        width: "48%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10
    }
})