import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Image,
    ImageBackground, TouchableOpacity,
    RefreshControl
} from "react-native";
import {
    ListItem,
    Avatar,
} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Banner from '../../Components/Banner';
import Header from "../Layout/Header";
import { Button } from "@rneui/base";
import { Rating } from 'react-native-ratings';
import Footer from "../Layout/Footer";
import { SCREEN_NAMES } from '../../Navigation/AppNavigation';
import { BASEAPI } from '../../repositories/Repository';
import { getRoomHome } from '../../repositories/RoomRepository';
import moment from 'moment';

const imageBg = require('../../../assets/bottom.jpeg');
const imageTop = require('../../../assets/top.jpeg')


const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
export default function HomeScreen() {
    const [room, setRoom] = useState(null);
    const navigation = useNavigation();
    var today = moment().format('YYYY-MM-DD');
    var lastday = moment().subtract(-20, 'days').format('YYYY-MM-DD');
    const ratingCompleted = (rating) => {
        console.log("Rating is: " + rating)
    }
    const image = { uri: `${BASEAPI}/images/bg.jpg` };
    useEffect(() => {
        // console.log(BASEAPI);
        getData()
    }, [BASEAPI])

    const getData = async () => {
        var data = await getRoomHome()
        setRoom(data)
    }
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        getData()
        wait(1000).then(() => setRefreshing(false));
    }, []);
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView style={styles.scrollView} refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }>
                <Banner />
                <View style={styles.listRoom}>
                    <Text style={styles.roomTitle}>
                        List of available rooms
                    </Text>
                    <View style={{ paddingVertical: 5 }}>
                        {room ? room.map((l, i) => (
                            <ListItem bottomDivider onPress={() => {
                                navigation.navigate({
                                    name: 'RoomDetail',
                                    params: {
                                        roomId: l.maPhong,
                                        type: l.loaiPhong.tenLoaiPhong,
                                        roomNumber: l.soPhong,
                                        price: l.giaPhong,
                                        checkin: today,
                                        checkout: lastday
                                    },
                                })
                            }}>
                                <Image source={{ uri: `${BASEAPI + l.hinhAnh.trim()}` }} style={styles.imageRoom} />
                                <ListItem.Content>
                                    <View style={{ position: "relative", width: "100%", }}>
                                        <ListItem.Title style={styles.nameRoom}>Room {l.loaiPhong.tenLoaiPhong}</ListItem.Title>
                                        <Text style={{ fontSize: 18, position: "absolute", right: 0 }}>ID: {l.soPhong}</Text>
                                    </View>
                                    {/* <Rating
                                            type='custom'
                                            ratingColor='gold'
                                            ratingBackgroundColor='#c8c7c8'
                                            ratingCount={5}
                                            imageSize={11}
                                            onFinishRating={ratingCompleted}
                                            style={{ paddingVertical: 3 }}
                                            startingValue={l.rating}
                                        /> */}
                                    <Text style={styles.price}>
                                        Book for {l.giaPhong}$
                                    </Text>
                                    <ListItem.Subtitle style={{ fontSize: 13 }}>{l.tienNghi}</ListItem.Subtitle>
                                </ListItem.Content>
                                <ListItem.Chevron />
                            </ListItem>
                        )) : ''}
                    </View>
                </View>
                <View style={styles.relax}>
                    <View style={styles.aboutContent}>
                        <Text style={styles.aboutTitle}>Relax in our Hotel</Text>
                        <Text style={{ fontSize: 14 }}>We make the best for all our customers.</Text>
                        <Text style={styles.desc}>
                            We will assist you anytime to enjoy the unique charm and atmosphere of this lovely hotel with balance and harmony. We invite you to explore the exciting array of fine amenities and facilities which are designed to enhance your experience. Hope you enjoy when you are in our hotel.
                        </Text>
                    </View>
                    <View style={styles.imageAbout}>
                        <Image source={imageBg} style={styles.imageBg} />
                        <Image source={imageTop} style={styles.imageTop} />
                        <Button
                            title="Contact Us"
                            buttonStyle={{ backgroundColor: 'rgba(214, 61, 57, 1)' }}
                            containerStyle={{
                                height: 40,
                                width: 130,
                                marginHorizontal: 38,
                                marginVertical: 5,
                                position: "absolute",
                                bottom: -5,
                                left: -10,
                                borderRadius: 5
                            }}
                            titleStyle={{
                                color: 'white',
                                marginHorizontal: 2,
                            }}
                            onPress={() => {
                                navigation.navigate(SCREEN_NAMES.Contact)
                            }}
                        />
                    </View>
                </View>
                <View>
                    <View style={styles.aboutUs}>
                        <Image source={{ uri: `${BASEAPI}/images/videobg.jpg` }} style={styles.imageAboutHotel} />
                        <View style={styles.rightAbout}>
                            <Text style={{ color: "#f57b51", marginBottom: 10 }}>Discover our Locations</Text>
                            <Text style={{ fontSize: 18 }}>Many Years of Hotels and Resort Experience</Text>
                        </View>
                    </View>
                    <Text style={styles.aboutText}><Icon name='check' style={{ fontSize: 10 }} /> We make the best for all our customers</Text>
                    <Text style={styles.aboutText}><Icon name='check' style={{ fontSize: 10 }} /> Follow our Resort Luxury Hotel</Text>
                    <Text style={styles.aboutText}><Icon name='check' style={{ fontSize: 10 }} /> Luxury hotel and best resort</Text>
                    <Text style={styles.aboutText}><Icon name='check' style={{ fontSize: 10 }} /> Double rooms and family rooms</Text>
                    <Text style={styles.aboutText}><Icon name='check' style={{ fontSize: 10 }} /> Enjoy a luxury experience</Text>
                    <TouchableOpacity style={styles.bookCheck} onPress={() => {
                        navigation.navigate(SCREEN_NAMES.About)
                    }}>
                        <Text style={{ fontSize: 16, color: "#fff", fontWeight: "500" }}>Check All Packages</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.contact}>
                    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                        <Text style={{
                            fontSize: 20, alignItems: "center", textAlign: "center",
                            paddingLeft: 40,
                            paddingRight: 40,
                            color: "#fff",
                        }}>Enjoy a Luxury experience. Discover our location. Relax and enjoy your holiday</Text>
                        <View style={{ flexDirection: "row", justifyContent: "center", top: 20, }}>
                            <TouchableOpacity style={styles.bookBtn} onPress={() => {
                                navigation.navigate(SCREEN_NAMES.Room)
                            }}>
                                <Text style={{ fontSize: 16, color: "#fff", fontWeight: "500" }}>Book Now</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.contactBtn} onPress={() => {
                                navigation.navigate(SCREEN_NAMES.Contact)
                            }}>
                                <Text style={{ fontSize: 16, color: "#fff", fontWeight: "500" }}>Contact Us</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
                <Footer />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        paddingBottom: 60
    },
    scrollView: {
        paddingTop: 20
    },
    listRoom: {
        paddingTop: 20
    },
    roomTitle: {
        fontSize: 20,
        left: 15
    },
    imageRoom: {
        width: 100,
        height: 100
    },
    price: {
        color: "#f57b51",
        fontWeight: "bold"
    },
    nameRoom: {
        fontSize: 18,
        fontStyle: "italic",
        color: "#625d5d"
    },
    relax: {
        padding: 10,
        paddingTop: 25,
        paddingBottom: 20,
        backgroundColor: "#f9f8f9",
        flexDirection: "row",
    },
    aboutContent: {
        width: "55%",
    },
    aboutTitle: {
        fontSize: 21,
        fontWeight: "500",
        paddingBottom: 6,
    },
    desc: {
        paddingTop: 6,
        color: "#878686"
    },
    imageAbout: {
        width: "45%",
        position: "relative",
    },
    imageBg: {
        position: "absolute",
        width: "80%",
        height: 130,
        borderRadius: 10,
        right: 0
    },
    imageTop: {
        position: "absolute",
        width: "80%",
        height: 130,
        borderRadius: 10,
        left: 0,
        top: 35,
        borderWidth: 2,
        borderColor: "#ebebeb"
    },
    contact: {
        width: "100%",
        height: 200
    },
    image: {
        flex: 1,
        justifyContent: "center",
        width: "100%",
    },
    bookBtn: {
        padding: 10,
        borderRadius: 10,
        marginRight: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    contactBtn: {
        padding: 10,
        backgroundColor: "rgba(214, 61, 57, 1)",
        borderRadius: 6,
        paddingLeft: 20,
        paddingRight: 20
    },
    aboutUs: {
        flexDirection: "row",
        width: "100%",
        height: 170,
        padding: 15,
        paddingTop: 25
    },
    imageAboutHotel: {
        width: "50%",
        borderRadius: 10,
    },
    rightAbout: {
        width: "50%",
        paddingLeft: 20,
        paddingTop: 20
    },
    aboutText: {
        color: "#777777",
        paddingLeft: 20,
        marginBottom: 8
    },
    bookCheck: {
        backgroundColor: "rgba(214, 61, 57, 1)",
        padding: 15,
        alignItems: "center",
        marginTop: 10,
        marginLeft: 20,
        borderRadius: 5,
        width: 200,
        marginBottom: 30
    }
});
