import React from "react";
import Header from "../Layout/Header";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    RefreshControl
} from "react-native";
import Footer from '../Layout/Footer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconI from 'react-native-vector-icons/Ionicons';
import { BASEAPI } from '../../repositories/Repository';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
export default function ServiceScreen() {
    // console.log(BASEAPI);

    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        wait(1000).then(() => setRefreshing(false));
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
                <View style={styles.service}>
                    <Text style={styles.title}>Bambuu Hotel Services</Text>
                    <Text style={styles.desc}>Typically, the basic hotel services include reception guests, room service, food service, restaurants in the hotel and security. Other services offered to guests of the hotel, can be considered as bonuses. These are the laundry service, massage room, fitness gyms, conference rooms, lock boxes for valuable assets and many other things. These services can be included in the price of the room or paid separately.</Text>
                    <View style={styles.serviceItem}>
                        <View style={styles.serviceIcon}>
                            <Icon name="swimming-pool" style={styles.icon} />
                        </View>
                        <Text style={{ fontSize: 16, color: "#888888", paddingBottom: 5 }}>Fitness Zone</Text>
                        <Text style={{ fontSize: 20, paddingBottom: 8 }}>Bambuu Hotel Services</Text>
                        <Text style={styles.desc}>Enjoy breathtaking views of the city while relaxing by the roof top swimming pool with soothing music or some great cocktails.</Text>
                    </View>
                    <View style={styles.serviceItem}>
                        <View style={styles.serviceIcon}>
                            <Icon name="beer" style={styles.icon} />
                        </View>
                        <Text style={{ fontSize: 16, color: "#888888", paddingBottom: 5 }}>Food & Drinks</Text>
                        <Text style={{ fontSize: 20, paddingBottom: 8 }}>Restaurant and Bar</Text>
                        <Text style={styles.desc}>With a simple yet luxurious design that can accommodate up to 70 guests, the menu is full of traditional Vietnamese cuisine. There are also a wide selection of drinks made from fresh local fruit or the famous Nespresso cup.</Text>
                    </View>
                    <View style={styles.serviceItem}>
                        <View style={styles.serviceIcon}>
                            <Icon name="wifi" style={styles.icon} />
                        </View>
                        <Text style={{ fontSize: 16, color: "#888888", paddingBottom: 5 }}>Accommodation</Text>
                        <Text style={{ fontSize: 20, paddingBottom: 8 }}>High speed WiFi</Text>
                        <Text style={styles.desc}>Full wifi coverage all over our hotel. Make sure a strong internet connection with tourists.</Text>
                    </View>
                    <View style={styles.serviceItem}>
                        <View style={styles.serviceIcon}>
                            <Icon name="spa" style={styles.icon} />
                        </View>
                        <Text style={{ fontSize: 16, color: "#888888", paddingBottom: 5 }}>Comfort & Relax</Text>
                        <Text style={{ fontSize: 20, paddingBottom: 8 }}>SPA & Wellness</Text>
                        <Text style={styles.desc}>HM Spa is a place to relax with a combination of natural environment and modern style. Our method offers a wide range of massage and beauty treatments to help you recover the balance of your body.</Text>
                    </View>
                    <View style={styles.serviceItem}>
                        <View style={styles.serviceIcon}>
                            <Icon name="coffee" style={styles.icon} />
                        </View>
                        <Text style={{ fontSize: 16, color: "#888888", paddingBottom: 5 }}>Safe & Secure</Text>
                        <Text style={{ fontSize: 20, paddingBottom: 8 }}>Staff 24/7</Text>
                        <Text style={styles.desc}>Highly assistant for customers. Ensure all personal information customers will be kept confidential information in all cases.</Text>
                    </View>
                </View>
                <View style={styles.facilities}>
                    <Text style={styles.facTitle}>Our Hotel Facilities</Text>
                    <View style={styles.facItem}>
                        <Image
                            style={styles.image}
                            source={{
                                uri: `${BASEAPI}/images/facilities.jpg`,
                            }}
                        />
                        <View style={styles.right}>
                            <View style={styles.facRightItem}>
                                <Icon name="tv" style={styles.iconRight} />
                                <Text style={{ fontSize: 18 }}>TV</Text>
                                <Text style={styles.desc}>Satellite</Text>
                            </View>
                            <View style={styles.facRightItem}>
                                <Icon name="motorcycle" style={styles.iconRight} />
                                <Text style={{ fontSize: 18 }}>Bike</Text>
                                <Text style={styles.desc}>Rental</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={styles.buttom}>
                            <IconI name="restaurant" style={styles.iconRight} />
                            <Text style={{ fontSize: 18 }}>Food</Text>
                            <Text style={styles.desc}>Included</Text>
                        </View>
                        <View style={{ width: "2%", }}></View>
                        <View style={styles.buttom}>
                            <Icon name="bed" style={styles.iconRight} />
                            <Text style={{ fontSize: 18 }}>Bed</Text>
                            <Text style={styles.desc}>King size</Text>
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
    },
    service: {
        padding: 20
    },
    title: {
        fontSize: 24,
        paddingBottom: 10,
        marginTop: 5
    },
    desc: {
        color: "#888887",
        fontStyle: "italic"
    },
    serviceItem: {
        backgroundColor: "#ffffff",
        borderRadius: 20,
        paddingTop: 15,
        padding: 20,
        marginTop: 10
    },
    serviceIcon: {
        paddingBottom: 8
    },
    icon: {
        fontSize: 30,
        color: "#f57b51",
    },
    iconRight: {
        fontSize: 20,
        color: "#f57b51",
        paddingBottom: 4
    },
    facilities: {
        backgroundColor: "#fff4f0",
        paddingTop: 10,
        padding: 20
    },
    facTitle: {
        fontSize: 30,
        paddingBottom: 20
    },
    facItem: {
        flexDirection: "row",
    },
    image: {
        width: "65%",
        height: 174,
        borderRadius: 10,
        marginRight: 1,
    },
    right: {
        width: "35%",
    },
    facRightItem: {
        backgroundColor: "#ffffff",
        width: "85%",
        alignItems: "center",
        marginLeft: 15,
        borderRadius: 15,
        padding: 10,
        marginBottom: 8
    },
    buttom: {
        backgroundColor: "#ffffff",
        width: "49%",
        alignItems: "center",
        borderRadius: 15,
        padding: 10,
        marginBottom: 8,
        marginTop: 10
    }
});
