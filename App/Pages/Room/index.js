
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    Image
} from "react-native";
import Header from "../Layout/Header";
import DatePicker from 'react-native-datepicker';
import RNPickerSelect from 'react-native-picker-select';
import {
    ListItem,
    Avatar,
} from '@rneui/themed';
import { Rating } from 'react-native-ratings';
import { Button } from "@rneui/base";
import { SCREEN_NAMES } from '../../Navigation/AppNavigation';
import { useNavigation } from '@react-navigation/native';
import Footer from "../Layout/Footer";


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
export default function RoomScreen() {
    const [checkout, setCheckOut] = useState('01-01-2000');
    const [checkin, setCheckIn] = useState('01-01-2000');
    const [price, setPrice] = useState('');
    const [type, setType] = useState('');
    const ratingCompleted = (rating) => {
        console.log("Rating is: " + rating)
    };
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView style={styles.checkRoom}>
                <Text style={styles.title}>Check Available Room</Text>
                <View style={styles.formSearch}>
                    <View style={styles.formControll}>
                        <Text style={styles.label}>Check-in Date</Text>
                        <View style={styles.inputView}>
                            <DatePicker
                                date={checkin}
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
                                        right: -5,
                                        top: 4,
                                        marginLeft: 0,
                                    },
                                    dateInput: {
                                        borderColor: "gray",
                                        alignItems: "flex-start",
                                        borderWidth: 0,
                                        position: 'absolute',
                                        left: 15

                                    },
                                    placeholderText: {
                                        fontSize: 15,
                                        color: "gray",
                                    },
                                    dateText: {
                                        fontSize: 15,
                                    }
                                }}
                                onDateChange={(checkin) => {
                                    setCheckIn(checkin);
                                }}
                            />
                        </View>
                    </View>
                    <View style={{ width: "4%" }}></View>
                    <View style={styles.formControll}>
                        <Text style={styles.label}>Check-out Date</Text>
                        <View style={styles.inputView}>
                            <DatePicker
                                date={checkout}
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
                                        right: -5,
                                        top: 4,
                                        marginLeft: 0,
                                    },
                                    dateInput: {
                                        borderColor: "gray",
                                        alignItems: "flex-start",
                                        borderWidth: 0,
                                        position: 'absolute',
                                        left: 15

                                    },
                                    placeholderText: {
                                        fontSize: 15,
                                        color: "gray"
                                    },
                                    dateText: {
                                        fontSize: 15,
                                    }
                                }}
                                onDateChange={(checkout) => {
                                    setCheckOut(checkout);
                                }}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.formSearch}>
                    <View style={styles.formControll}>
                        <Text style={styles.label}>Type Room</Text>
                        <View style={styles.inputViewSelect}>
                            <RNPickerSelect
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: 'Football', value: 'football' },
                                    { label: 'Baseball', value: 'baseball' },
                                    { label: 'Hockey', value: 'hockey' },
                                ]}
                            />
                        </View>
                    </View>
                    <View style={{ width: "4%" }}></View>
                    <View style={styles.formControll}>
                        <Text style={styles.label}>Price</Text>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Price ($)"
                                onChangeText={(price) => setPrice(price)}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.formSearch}>
                    <View style={styles.formControllButton}>
                        <Button
                            style={styles.btnSearch}
                            title="Check"
                            buttonStyle={{ backgroundColor: 'rgba(214, 61, 57, 1)' }}
                            // icon={<Icon name="react" size={15} color="#0FF" />}
                            containerStyle={{
                                height: 40,
                                width: 130,
                                marginHorizontal: 50,
                                marginVertical: 7,
                                bottom: -5,
                                left: -10,
                                borderRadius: 5,
                                position: "absolute",
                                left: 160
                            }}
                            titleStyle={{
                                color: 'white',
                                marginHorizontal: 2,
                            }}
                        />
                    </View>
                </View>
                <View style={styles.result}>
                    <View style={styles.listRoom}>
                        <View style={{ paddingVertical: 5 }}>
                            {room.map((l, i) => (
                                <ListItem key={i} bottomDivider onPress={() => {
                                    navigation.navigate(SCREEN_NAMES.RoomDetail)
                                }}>
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
                                        <ListItem.Subtitle style={{ fontSize: 13 }}>{l.desc}</ListItem.Subtitle>
                                    </ListItem.Content>
                                    <ListItem.Chevron />
                                </ListItem>
                            ))}
                        </View>
                    </View>
                </View>
                <Footer />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 60
    },
    checkRoom: {
        padding: 0
    },
    title: {
        fontSize: 20,
        fontWeight: "500",
        marginBottom: 20,
        paddingLeft: 20,
        paddingTop: 20
    },
    formSearch: {
        flexDirection: "row",
        paddingLeft: 20,
        paddingRight: 20
    },
    formControll: {
        width: "48%"
    },
    formControllButton: {
        width: "100%",
        position: "relative",
        height: 45,
    },
    inputView: {
        backgroundColor: "#fdfdfded",
        borderRadius: 5,
        height: 40,
        marginBottom: 20,
        alignItems: "center",
        lineHeight: 84,
        width: "100%",
    },
    inputViewSelect: {
        backgroundColor: "#fdfdfded",
        borderRadius: 5,
        height: 40,
        marginBottom: 20,
        alignItems: "center",
        lineHeight: 84,
        width: "100%",
        paddingLeft: 15,
        paddingTop: 10
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 10,
    },
    label: {
        paddingBottom: 5
    },
    listRoom: {
        paddingTop: 5
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
});
