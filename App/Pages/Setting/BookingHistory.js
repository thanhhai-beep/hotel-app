import React, { useState } from "react";
import Header from "../Layout/Header";
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from "react-native";
import { ListItem } from '@rneui/themed';
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
export default function HistoryScreen() {

    return (
        <View style={styles.container}><Header />
            <ScrollView>
                <Text style={styles.title}>Check-out history</Text>
                <View style={styles.history}>
                    <ScrollView horizontal>
                        <View style={{ paddingVertical: 5 }}>
                            <ListItem bottomDivider>
                                <ListItem.Content>
                                    <View style={styles.table}>
                                        <Text style={{
                                            width: 50,
                                            alignItems: "center",
                                            textAlign: "center",
                                        }}>STT</Text>
                                        <Text style={styles.th}>Name</Text>
                                        <Text style={styles.th}>Phone</Text>
                                        <Text style={styles.th}>Room ID</Text>
                                        <Text style={styles.th}>Room Type</Text>
                                        <Text style={styles.th}>deposit (10%)</Text>
                                        <Text style={styles.th}>Total</Text>
                                        <Text style={{
                                            width: 220,
                                            alignItems: "center",
                                            textAlign: "center",
                                        }}>Check (in-out)</Text>
                                    </View>
                                </ListItem.Content>
                            </ListItem>
                            {room.map((l, i) => (
                                <ListItem key={i} bottomDivider>
                                    <ListItem.Content>
                                        <View style={styles.table}>
                                            <Text style={{
                                                width: 50,
                                                alignItems: "center",
                                                textAlign: "center",
                                            }}>1</Text>
                                            <Text style={styles.td}>Hai</Text>
                                            <Text style={styles.td}>0837418189</Text>
                                            <Text style={styles.td}>204</Text>
                                            <Text style={styles.td}>Vip</Text>
                                            <Text style={styles.td}>25$</Text>
                                            <Text style={styles.td}>327$</Text>
                                            <Text style={{
                                                width: 220,
                                                alignItems: "center",
                                                textAlign: "center",
                                            }}>10/10/2020 - 20/10/2020</Text>
                                        </View>
                                    </ListItem.Content>
                                </ListItem>
                            ))}
                        </View>
                    </ScrollView>
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
    title: {
        fontSize: 22,
        alignItems: "center",
        textAlign: "center",
        marginTop: 30
    },
    history: {
        paddingTop: 30
    },
    table: {
        flexDirection: "row",
    },
    th: {
        width: 100,
        alignItems: "center",
        textAlign: "center",
    },
    td: {
        width: 100,
        alignItems: "center",
        textAlign: "center",
    }
});
