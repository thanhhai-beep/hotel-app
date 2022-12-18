import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function Banner() {
    const navigation = useNavigation();
    const image = { uri: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp" };
    const type = (room) => {
        navigation.navigate({
            name: 'RoomTypeList',
            params: { type: room },
        });
    }
    return (
        <View style={styles.banner}>
            <TouchableOpacity style={styles.bannerItem} onPress={() => type("Normal")}>
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                    <Text style={styles.bannerTitle}>
                        Normal Room
                    </Text>
                    <Text style={styles.guest}>
                        <Icon name="users" />  2 Guests
                    </Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bannerItem} onPress={() => type("VIP")}>
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                    <Text style={styles.bannerTitle}>
                        Vip Room
                    </Text>
                    <Text style={styles.guest}>
                        <Icon name="users" />  5 Guests
                    </Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    banner: {
        width: "100%",
        height: 160,
        flexDirection: "row",
        marginBottom: 10
    },
    bannerItem: {
        width: "46%",
        backgroundColor: "#fff111",
        marginRight: "2%",
        marginLeft: "2%",
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    bannerTitle: {
        color: "#f57b51",
        fontSize: 19,
        fontStyle: "italic",
        left: 10,
        bottom: -40,
    },
    guest: {
        color: "#555555",
        fontSize: 15,
        fontStyle: "italic",
        left: 10,
        bottom: -45,
    },
});
