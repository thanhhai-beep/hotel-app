
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Image
} from "react-native";
import {
    ListItem,
    Avatar,
} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Banner from '../../Components/Banner';
import Header from "../Layout/Header";
import { Button } from "@rneui/base";
import { Rating, AirbnbRating } from 'react-native-ratings';
import Footer from "../Layout/Footer";

const imageBg = require('../../../assets/bottom.jpeg');
const imageTop = require('../../../assets/top.jpeg')

const room = [
    {
        title: "Normal Room",
        image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp",
        price: 328,
        desc: "Fully furnished, luxurious furniture, service, room of 3-star standard or above.",
        rating: 1
    },
    {
        title: "Normal Room",
        image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp",
        price: 328,
        desc: "Fully furnished, luxurious furniture, service, room of 3-star standard or above.",
        rating: 4
    },
    {
        title: "Normal Room",
        image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp",
        price: 328,
        desc: "Fully furnished, luxurious furniture, service, room of 3-star standard or above.",
        rating: 5
    },
    {
        title: "Normal Room",
        image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp",
        price: 328,
        desc: "Fully furnished, luxurious furniture, service, room of 3-star standard or above.",
        rating: 2.8
    },
    {
        title: "Normal Room",
        image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp",
        price: 328,
        desc: "Fully furnished, luxurious furniture, service, room of 3-star standard or above.",
        rating: 3.4
    },
]
export default function HomeScreen() {
    const [maphong, setMaphong] = useState("");
    const ratingCompleted = (rating) => {
        console.log("Rating is: " + rating)
    }
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView style={styles.scrollView}>
                <View style={styles.search}>
                    <Icon name="search" style={styles.iconSearch}>
                    </Icon>
                    <TextInput tyle={styles.searchText}
                        placeholder="Room"
                        placeholderTextColor="#003f5c"
                        onChangeText={(maphong) => setMaphong(maphong)} />
                </View>
                <Banner />
                <View style={styles.listRoom}>
                    <Text style={styles.roomTitle}>
                        Fully furnished
                    </Text>
                    <View style={{ paddingVertical: 5 }}>
                        {room.map((l, i) => (
                            <ListItem key={i} bottomDivider>
                                <Avatar title={l.title} source={{ uri: l.image }} style={styles.imageRoom} />
                                <ListItem.Content>
                                    <ListItem.Title style={styles.nameRoom}>{l.title}</ListItem.Title>
                                    <Rating
                                        type='custom'
                                        ratingColor='gold'
                                        ratingBackgroundColor='#c8c7c8'
                                        ratingCount={5}
                                        imageSize={11}
                                        onFinishRating={ratingCompleted}
                                        style={{ paddingVertical: 3 }}
                                        startingValue={l.rating}
                                    />
                                    <Text style={styles.price}>
                                        Book for {l.price}$
                                    </Text>
                                    <ListItem.Subtitle>{l.desc}</ListItem.Subtitle>
                                </ListItem.Content>
                                <ListItem.Chevron />
                            </ListItem>
                        ))}
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
                        />
                    </View>
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
    search: {
        position: "relative",
        marginTop: 10,
        height: 45,
        backgroundColor: "#ededed",
        borderRadius: 25,
        marginBottom: 15,
        alignItems: "center",
        paddingTop: 12,
        paddingRight: 10,
        marginLeft: "10%",
        marginRight: "10%"
    },
    iconSearch: {
        fontSize: 20,
        fontWeight: 100,
        position: "absolute",
        right: 18,
        top: 12,
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
    }
});
