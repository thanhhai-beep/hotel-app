
import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Image,
    RefreshControl,
    TouchableOpacity,
    ActivityIndicator
} from "react-native";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { roomType } from "../../repositories/RoomRepository";
import { BASEAPI } from '../../repositories/Repository';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
export default function RoomTypeScreen(props) {
    const [type, setType] = useState(props.route.params.type);
    const [room, setRoom] = useState(null)
    const navigation = useNavigation();
    var today = moment().format('YYYY-MM-DD');
    var lastday = moment().subtract(-20, 'days').format('YYYY-MM-DD');
    useEffect(() => {
        getData()
    }, [props.route.params])

    const getData = async () => {
        setType(props.route.params.type)
        var data = await roomType(type)
        setRoom(data)
    }

    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setType(props.route.params.type)
        getData()
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
                {room ? <View style={styles.result}>
                    {room.map((l, i) => (
                        <TouchableOpacity onPress={() => {
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
                            <View style={styles.roomItem}>
                                <View style={styles.roomImage}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: `${BASEAPI + l.hinhAnh}`,
                                        }}
                                    />
                                    <Text style={styles.type}>Room {type}</Text>
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
                                    <Text style={styles.descType}>{l.loaiPhong.moTa}</Text>
                                </View>
                                <View style={styles.roomText}>
                                    <View style={styles.titleItem}>
                                        <Text style={styles.roomName}>
                                            Room number: {l.soPhong}
                                        </Text>
                                        <Text style={{ position: "absolute", right: 0, top: 0, fontSize: 20 }}>{l.tang} st floor</Text>
                                    </View>
                                    <Text style={styles.price}>
                                        Book for {l.giaPhong}$
                                    </Text>
                                    <Text style={styles.desc}>{l.tienNghi}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
                    : <ActivityIndicator style={styles.loading} size="large" color="#f57b51" />
                }
                <Footer />
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingBottom: 60,
        backgroundColor: "#e5e5e5"
    },
    result: {
        padding: 25,
    },
    roomItem: {
        width: "100%",
        backgroundColor: "#ffffff",
        borderRadius: 10,
        borderWidth: 4,
        borderColor: "#ffffff",
        padding: 10,
        marginBottom: 15
    },
    roomImage: {
        position: "relative",
        height: 160,
        justifyContent: "center",
    },
    image: {
        height: "100%",
        width: "100%",
        position: "absolute",
        borderRadius: 5
    },
    type: {
        position: "absolute",
        fontSize: 25,
        color: "#f57b51",
        bottom: 70,
        left: 25,
        fontWeight: "500"
    },
    guest: {
        left: 25,
        position: "absolute",
        flexDirection: "row",
        bottom: 50
    },
    icon: {
        color: "#fff",
        marginTop: 3,
        marginRight: 5,
        fontWeight: "500",
        fontSize: 13
    },
    textGuest: {
        color: "#fff",
        marginRight: 25,
        fontWeight: "500",
        fontSize: 15
    },
    descType: {
        position: "absolute",
        top: 105,
        padding: 10,
        paddingBottom: 0,
        paddingLeft: 25,
        color: "#fff"
    },
    roomText: {
        padding: 8
    },
    titleItem: {
        position: "relative"
    },
    roomName: {
        fontSize: 20,
        color: "#3e3c3c",
        marginBottom: 3,
    },
    price: {
        color: "#f57b51",
        fontWeight: "bold",
        marginBottom: 3
    },
    loading: {
        backgroundColor: "#fff",
        paddingTop: 55,
        marginTop: 15,
        paddingBottom: 100
    }
})