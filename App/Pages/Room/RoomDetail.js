import React, { useEffect, useState } from "react";
import Header from "../Layout/Header";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    RefreshControl
} from "react-native";
import Footer from "../Layout/Footer";
import { Rating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconF from 'react-native-vector-icons/FontAwesome';
import { Button } from '@rneui/themed';
import DatePicker from 'react-native-datepicker';
import { ImageSlider } from "react-native-image-slider-banner";
import { getRoomDetail } from '../../repositories/RoomRepository';
import { BASEAPI } from '@env';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
export default function RoomDetailScreen(props) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [room, setRoom] = useState('');
    const [price, setPrice] = useState('');
    const [type, setType] = useState('');
    const [checkin, setCheckIn] = useState('2022-12-20');
    const [checkout, setCheckOut] = useState('2022-12-21');
    const [roomResult, setRoomResult] = useState(null);
    let roomId = props.route.params.roomId;
    const ratingCompleted = (rating) => {
        console.log("Rating is: " + rating)
    }
    useEffect(() => {
        roomDetail()
        // console.log(BASEAPI);
    }, [props.route.params])
    const roomDetail = async () => {
        setRoom(props.route.params.roomNumber)
        setPrice(props.route.params.price)
        setType(props.route.params.type)
        setCheckIn(props.route.params.checkin)
        setCheckOut(props.route.params.checkout)
        var data = await getRoomDetail(roomId)
        setRoomResult(data)
    }

    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
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
                {roomResult ?
                    roomResult.map((l, i) => (
                        <View >
                            <View style={styles.room}>
                                <ImageSlider
                                    data={[
                                        { img: `${BASEAPI}${l.hinhAnh.trim()}` },
                                    ]}
                                    autoPlay={false}
                                    onItemChanged={(item) => console.log("item", item)}
                                    closeIconColor="#444"
                                    indicatorContainerStyle={{ top: 10 }}
                                />
                            </View>
                            <View style={styles.roomText}>
                                <View style={styles.topTitle}>
                                    <Text style={styles.title}>
                                        {l.loaiPhong.tenLoaiPhong} Room
                                    </Text>
                                    <Text style={styles.titleRight}>
                                        ID:{l.soPhong}
                                    </Text>
                                </View>
                                <Text>
                                    <Rating
                                        type='custom'
                                        ratingColor='gold'
                                        ratingBackgroundColor='#c8c7c8'
                                        ratingCount={5}
                                        imageSize={11}
                                        onFinishRating={ratingCompleted}
                                        style={{ paddingVertical: 3 }}
                                        startingValue={4}
                                    />
                                </Text>
                                <Text style={styles.price}>
                                    Book for {l.giaPhong}$
                                </Text>
                                <View style={styles.guest}>
                                    <Icon name="users" style={styles.icon} />
                                    <Text style={styles.textGuest} >
                                        {l.loaiPhong.maLoaiPhong == 1 ? '2-4 Customers' : ''}
                                        {l.loaiPhong.maLoaiPhong == 2 ? '2 Customers' : ''}
                                        {l.loaiPhong.maLoaiPhong == 3 ? '2-8 Customers' : ''}
                                    </Text>
                                    <Icon name="bed" style={styles.icon} />
                                    <Text style={styles.textGuest} >
                                        {l.loaiPhong.maLoaiPhong == 1 ? '4 sqft' : ''}
                                        {l.loaiPhong.maLoaiPhong == 2 ? '2 sqft' : ''}
                                        {l.loaiPhong.maLoaiPhong == 3 ? '8 sqft' : ''}
                                    </Text>
                                </View>
                                <Text style={styles.desc}>{l.tienNghi}</Text>
                                <View style={styles.footerRoom}>
                                    <Icon name="users" style={styles.iconFooter} />
                                    <Text style={styles.lineBorder}></Text>
                                    <Icon name="bed" style={styles.iconFooter} />
                                    <Text style={styles.lineBorder}></Text>
                                    <IconF name="bathtub" style={styles.iconFooter} />
                                    <Text style={styles.lineBorder}></Text>
                                    <Icon name="motorcycle" style={styles.iconFooter} />
                                </View>
                            </View>
                        </View>
                    ))
                    : ''}

                <View style={styles.booking}>
                    <Text style={styles.bookTitle}>Book Now</Text>
                    <View style={styles.formSearch}>
                        <View style={styles.formControll}>
                            <Text style={styles.label}>Name</Text>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="Your Name"
                                    onChangeText={(name) => setName(name)}
                                />
                            </View>
                        </View>
                        <View style={{ width: "4%" }}></View>
                        <View style={styles.formControll}>
                            <Text style={styles.label}>Phone Number</Text>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="Phone Number"
                                    onChangeText={(phone) => setPhone(phone)}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.formSearch}>
                        <View style={styles.formControll}>
                            <Text style={styles.label}>Email</Text>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="Email"
                                    onChangeText={(email) => setEmail(email)}
                                />
                            </View>
                        </View>
                        <View style={{ width: "4%" }}></View>
                        <View style={styles.formControll}>
                            <Text style={styles.label}>Room Number</Text>
                            <View style={styles.inputView}>
                                <Text style={styles.TextInput}>{room}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.formSearch}>
                        <View style={styles.formControll}>
                            <Text style={styles.label}>Room Price</Text>
                            <View style={styles.inputView}>
                                <Text style={styles.TextInput}>{price}$</Text>
                            </View>
                        </View>
                        <View style={{ width: "4%" }}></View>
                        <View style={styles.formControll}>
                            <Text style={styles.label}>Room Type</Text>
                            <View style={styles.inputView}>
                                <Text style={styles.TextInput}>{type}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.formSearch}>
                        <View style={styles.formControll}>
                            <Text style={styles.label}>Check-In Date</Text>
                            <View style={styles.inputView}>
                                <DatePicker
                                    date={checkin}
                                    mode="date"
                                    placeholder="select date"
                                    format="YYYY-MM-DD"
                                    minDate="2022-12-12"
                                    maxDate="2023-01-20"
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
                            <Text style={styles.label}>Check-Out Date</Text>
                            <View style={styles.inputView}>
                                <DatePicker
                                    date={checkout}
                                    mode="date"
                                    placeholder="select date"
                                    format="YYYY-MM-DD"
                                    minDate="2022-12-12"
                                    maxDate="2023-01-20"
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
                                    onDateChange={(checkout) => {
                                        setCheckOut(checkout);
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.formSearch}>
                        <Button
                            title={'Book Now'}
                            containerStyle={{
                                width: "100%",
                                marginHorizontal: 0,
                                marginVertical: 0,
                            }}
                            buttonStyle={{
                                backgroundColor: '#f57b51',
                                borderRadius: 3,
                                marginTop: 15,
                                padding: 10,
                            }}
                        />
                    </View>
                    <Text style={{
                        alignItems: "center",
                        textAlign: "center",
                        marginTop: 15
                    }}>
                        You are booking as a guest.
                    </Text>
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
    room: {
        flexDirection: "row",
        paddingBottom: 10,
        height: 250,
    },
    roomText: {
        paddingLeft: 20,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#fff",
        borderRadius: 15
    },
    topTitle: {
        flexDirection: "row",
        alignItems: "center",
        textAlign: "center",
        position: "relative"
    },
    titleRight: {
        right: 20,
        fontSize: 20,
        position: "absolute"
    },
    title: {
        fontSize: 20,
        fontStyle: "italic",
        fontWeight: "500",
        paddingBottom: 5
    },
    price: {
        color: "#f57b51",
        fontWeight: "bold"
    },
    desc: {
        marginTop: 5
    },
    guest: {
        flexDirection: "row",
        paddingBottom: 3,
        paddingTop: 5
    },
    icon: {
        color: "#615d5d",
        marginTop: 3,
        marginRight: 5
    },
    textGuest: {
        color: "#615d5d",
        marginRight: 25
    },
    footerRoom: {
        flexDirection: "row",
        paddingBottom: 3,
        paddingTop: 15,
        height: 40
    },
    iconFooter: {
        color: "#615d5d",
        marginTop: 3,
        marginRight: 5,
        width: "23%",
        alignItems: "center",
        textAlign: "center",
        fontSize: 15
    },
    lineBorder: {
        width: 2,
        backgroundColor: "#615d5d"
    },
    booking: {
        padding: 20,
        backgroundColor: "white",
        borderRadius: 10,
        margin: 20,
    },
    bookTitle: {
        fontSize: 18,
        fontWeight: "500",
        marginBottom: 25
    },
    formSearch: {
        flexDirection: "row",
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
        marginBottom: 15,
        alignItems: "center",
        lineHeight: 84,
        width: "100%",
        borderWidth: 1,
        borderColor: "#dedede"
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 10,
    },
    label: {
        paddingBottom: 5,
        fontSize: 13
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
        paddingTop: 10,
        borderWidth: 1,
        borderColor: "#dedede"
    },
});
