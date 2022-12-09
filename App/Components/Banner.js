import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ImageBackground
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
// import { ImageSlider } from "react-native-image-slider-banner";


export default function Banner() {
    const image = { uri: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp" };
    return (
        <View style={styles.banner}>
            {/* <ImageSlider
                data={[
                    { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU' },
                    { img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' },
                    { img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' }
                ]}
                autoPlay={false}
                onItemChanged={(item) => console.log("item", item)}
                closeIconColor="#fff"
            /> */}
            <View style={styles.bannerItem}>
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                    <Text style={styles.bannerTitle}>
                        Normal Room
                    </Text>
                    <Text style={styles.guest}>
                        <Icon name="users" />2 Guests
                    </Text>
                </ImageBackground>
            </View>
            <View style={styles.bannerItem}>
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                    <Text style={styles.bannerTitle}>
                        Normal Room
                    </Text>
                    <Text style={styles.guest}>
                        <Icon name="users" />2 Guests
                    </Text>
                </ImageBackground>
            </View>
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
        color: "#000666",
        fontSize: 19,
        fontStyle: "italic",
        left: 10,
        bottom: -40,
    },
    guest: {
        color: "#000666",
        fontSize: 15,
        fontStyle: "italic",
        left: 10,
        bottom: -45,
    },
});
