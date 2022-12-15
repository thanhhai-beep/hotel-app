
import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Image,
    RefreshControl
} from "react-native";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Icon from 'react-native-vector-icons/FontAwesome5';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
export default function RoomTypeScreen(props) {
    const [type, setType] = useState(props.route.params.type);
    useEffect(() => {
        setType(props.route.params.type)
    }, [props.route.params])

    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setType(props.route.params.type)
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
                <View style={styles.result}>
                    <View style={styles.roomItem}>
                        <View style={styles.roomImage}>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp',
                                }}
                            />
                            <Text style={styles.type}>Room {type}</Text>
                            <View style={styles.guest}>
                                <Icon name="users" style={styles.icon} />
                                <Text style={styles.textGuest} >2-4 Customers</Text>
                                <Icon name="bed" style={styles.icon} />
                                <Text style={styles.textGuest} >4sqft</Text>
                            </View>
                        </View>
                        <View style={styles.roomText}>
                            <Text style={styles.roomName}>
                                Homie Hotel Room
                            </Text>
                            <Text style={styles.price}>
                                Book for 508$
                            </Text>
                            <Text style={styles.desc}>
                                Fully furnished, luxurious furniture, service, room of 3-star standard or above, attentive service staffs, especially, the room is very modern.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.roomItem}>
                        <View style={styles.roomImage}>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp',
                                }}
                            />
                            <Text style={styles.type}>Room {type}</Text>
                            <View style={styles.guest}>
                                <Icon name="users" style={styles.icon} />
                                <Text style={styles.textGuest} >2-4 Customers</Text>
                                <Icon name="bed" style={styles.icon} />
                                <Text style={styles.textGuest} >4sqft</Text>
                            </View>
                        </View>
                        <View style={styles.roomText}>
                            <Text style={styles.roomName}>
                                Homie Hotel Room
                            </Text>
                            <Text style={styles.price}>
                                Book for 508$
                            </Text>
                            <Text style={styles.desc}>
                                Fully furnished, luxurious furniture, service, room of 3-star standard or above, attentive service staffs, especially, the room is very modern.
                            </Text>
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
        paddingBottom: 60,
        backgroundColor: "#e5e5e5"
    },
    result: {
        padding: 25,
    },
    roomItem: {
        width: "100%",
        backgroundColor: "#ffffff",
        borderRadius: 20,
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
        borderRadius: 20
    },
    type: {
        position: "absolute",
        fontSize: 25,
        color: "#f57b51",
        bottom: 40,
        left: 25,
    },
    guest: {
        left: 25,
        position: "absolute",
        flexDirection: "row",
        bottom: 20
    },
    icon: {
        color: "#3e3c3c",
        marginTop: 3,
        marginRight: 5
    },
    textGuest: {
        color: "#3e3c3c",
        marginRight: 25
    },
    roomText: {
        padding: 8
    },
    roomName: {
        fontSize: 20,
        color: "#3e3c3c",
        marginBottom: 3
    },
    price: {
        color: "#f57b51",
        fontWeight: "bold",
        marginBottom: 3
    },
})