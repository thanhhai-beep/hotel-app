
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ImageBackground,
    ScrollView,
} from "react-native";
import {
    ListItem,
    Avatar,
} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Banner from '../../Components/Banner';
import Header from "../Layout/Header";

const room = [
    {
        title: "Normal Room",
        image: "https://uifaces.co/our-content/donated/KtCFjlD4.jpg",
        price: 328,
        desc: "Fully furnished, luxurious furniture, service, room of 3-star standard or above."
    },
    {
        title: "Normal Room",
        image: "https://uifaces.co/our-content/donated/KtCFjlD4.jpg",
        price: 328,
        desc: "Fully furnished, luxurious furniture, service, room of 3-star standard or above."
    },
    {
        title: "Normal Room",
        image: "https://uifaces.co/our-content/donated/KtCFjlD4.jpg",
        price: 328,
        desc: "Fully furnished, luxurious furniture, service, room of 3-star standard or above."
    },
    {
        title: "Normal Room",
        image: "https://uifaces.co/our-content/donated/KtCFjlD4.jpg",
        price: 328,
        desc: "Fully furnished, luxurious furniture, service, room of 3-star standard or above."
    },
    {
        title: "Normal Room",
        image: "https://uifaces.co/our-content/donated/KtCFjlD4.jpg",
        price: 328,
        desc: "Fully furnished, luxurious furniture, service, room of 3-star standard or above."
    },
]

export default function HomeScreen() {
    const [maphong, setMaphong] = useState("");
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
                    <View style={{ paddingVertical: 8 }}>
                        {room.map((l, i) => (
                            <ListItem key={i} bottomDivider>
                                <Avatar title={l.title} source={{ uri: l.image }} />
                                <ListItem.Content>
                                    <ListItem.Title>{l.title}</ListItem.Title>
                                    <ListItem.Subtitle>{l.desc}</ListItem.Subtitle>
                                </ListItem.Content>
                                <ListItem.Chevron />
                            </ListItem>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
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
});
