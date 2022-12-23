
import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    Image,
    ActivityIndicator,
    RefreshControl
} from "react-native";
import Header from "../Layout/Header";
import DatePicker from 'react-native-datepicker';
import RNPickerSelect from 'react-native-picker-select';
import {
    ListItem,
} from '@rneui/themed';
import { Rating } from 'react-native-ratings';
import { Button } from "@rneui/base";
import { useNavigation } from '@react-navigation/native';
import Footer from "../Layout/Footer";
import { searchRoom, roomDefault } from '../../repositories/RoomRepository';
import { BASEAPI } from '../../repositories/Repository';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome5';



const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
export default function RoomScreen() {
    const [checkin, setCheckIn] = useState(moment().format('YYYY-MM-DD'));
    const [checkout, setCheckOut] = useState(moment().subtract(-20, 'days').format('YYYY-MM-DD'));
    const [price, setPrice] = useState(1500);
    const [type, setType] = useState('VIP');
    const [rooms, setRoom] = useState(null);
    const [refreshing, setRefreshing] = React.useState(false);
    var today = moment().format('YYYY-MM-DD');
    var minDate = moment().subtract(-1, 'days').format('YYYY-MM-DD');
    var maxDate = moment().subtract(-60, 'days').format('YYYY-MM-DD');
    const ratingCompleted = (rating) => {
        console.log("Rating is: " + rating)
    };
    useEffect(() => {
        listRoomDefault()
        // console.log(BASEAPI);
    }, [BASEAPI])
    const btnSearch = async () => {
        var data = {
            checkin: checkin,
            checkout: checkout,
            maxPrice: price,
            typeRoom: type,
        }
        var datarearch = await searchRoom(data);
        setRoom(datarearch)
    }
    const listRoomDefault = async () => {
        setCheckIn(today)
        setCheckOut(minDate)
        var data = await roomDefault();
        setRoom(data)
    }
    const navigation = useNavigation();

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        await listRoomDefault()
        wait(500).then(() => setRefreshing(false));
    }, []);
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView style={styles.checkRoom} refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }>
                <Text style={styles.title}>Check Available Room</Text>
                <View style={styles.formSearch}>
                    <View style={styles.formControll}>
                        <Text style={styles.label}>Check-in Date</Text>
                        <View style={styles.inputView}>
                            <DatePicker
                                date={checkin}
                                mode="date"
                                placeholder="select date"
                                format="YYYY-MM-DD"
                                minDate={today}
                                maxDate={maxDate}
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
                                format="YYYY-MM-DD"
                                minDate={minDate}
                                maxDate={maxDate}
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
                                onValueChange={(value) => setType(value)}
                                items={[
                                    { label: 'Room Normal', value: 'Normal' },
                                    { label: 'Room VIP', value: 'VIP' },
                                    { label: 'Homestay', value: 'Homestay' },
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
                            <Icon name="dollar-sign" style={styles.icon} />
                        </View>
                    </View>
                </View>
                <View style={styles.formSearch}>
                    <View style={styles.formControllButton}>
                        <Button
                            style={styles.btnSearch}
                            title="Check"
                            buttonStyle={{ backgroundColor: 'rgba(214, 61, 57, 1)' }}
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
                            onPress={btnSearch}
                        />
                    </View>
                </View>
                <View style={styles.result}>
                    {rooms ? <View style={styles.listRoom}>
                        <View style={{ paddingVertical: 5 }}>
                            {rooms.map((l, i) => (
                                <ListItem key={i} bottomDivider onPress={() => {
                                    navigation.navigate({
                                        name: 'RoomDetail',
                                        params: {
                                            roomId: l.maPhong,
                                            type: l.loaiPhong.tenLoaiPhong,
                                            roomNumber: l.soPhong,
                                            price: l.giaPhong,
                                            checkin: checkin,
                                            checkout: checkout
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
                            ))}
                        </View>
                    </View>
                        :
                        <ActivityIndicator style={styles.loading} size="large" color="#f57b51" />}
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
        height: 100,
        backgroundColor: "#eee"
    },
    price: {
        color: "#f57b51",
        fontWeight: "bold",
        marginBottom: 5,
        marginTop: 5
    },
    nameRoom: {
        fontSize: 18,
        fontStyle: "italic",
        color: "#625d5d"
    },
    loading: {
        backgroundColor: "#fff",
        paddingTop: 55,
        marginTop: 15,
        paddingBottom: 100
    },
    icon: {
        position: "absolute",
        right: 10,
        top: 11,
        fontSize: 18,
        color: "#888888"
    }
});
