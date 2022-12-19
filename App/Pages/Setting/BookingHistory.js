import React, { useEffect, useState } from "react";
import Header from "../Layout/Header";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    RefreshControl
} from "react-native";
import { ListItem } from '@rneui/themed';
import Footer from "../Layout/Footer";
import { history } from '../../repositories/RoomRepository';
import AsyncStorage from "@react-native-async-storage/async-storage";


const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
export default function HistoryScreen() {
    const [list, setList] = useState(null)
    useEffect(() => {
        // console.log(11);
        getListHistory()
    }, [])
    const getListHistory = async () => {
        var user = await AsyncStorage.getItem('username')
        var data = await history(user)
        // console.log(data);
        setList(data)
    }

    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        getListHistory()
        wait(2000).then(() => setRefreshing(false));
    }, []);
    return (
        <View style={styles.container}><Header />
            <ScrollView refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }>
                <Text style={styles.title}>Check-out history</Text>
                <View style={styles.history}>
                    <ScrollView horizontal >
                        <View style={{ paddingVertical: 5 }}>
                            <ListItem bottomDivider>
                                <ListItem.Content>
                                    <View style={styles.table}>
                                        <Text style={{
                                            width: 50,
                                            alignItems: "center",
                                            textAlign: "center",
                                        }}>STT</Text>
                                        <Text style={styles.th}>FullName</Text>
                                        <Text style={styles.th}>Phone</Text>
                                        <Text style={styles.th}>Room ID</Text>
                                        {/* <Text style={styles.th}>Room Type</Text>
                                        <Text style={styles.th}>deposit (10%)</Text> */}
                                        <Text style={styles.th}>Total</Text>
                                        <Text style={{
                                            width: 220,
                                            alignItems: "center",
                                            textAlign: "center",
                                        }}>Check (in-out)</Text>
                                    </View>
                                </ListItem.Content>
                            </ListItem>
                            {list ? list.map((l, i) => (
                                <ListItem key={i} bottomDivider>
                                    <ListItem.Content>
                                        <View style={styles.table}>
                                            <Text style={{
                                                width: 50,
                                                alignItems: "center",
                                                textAlign: "center",
                                            }}>1</Text>
                                            <Text style={styles.td}>{l.hoTen}</Text>
                                            <Text style={styles.td}>{l.sodt}</Text>
                                            <Text style={styles.td}>{l.soPhong}</Text>
                                            {/* <Text style={styles.td}>Vip</Text> */}
                                            {/* <Text style={styles.td}>25$</Text> */}
                                            <Text style={styles.td}>{l.tongTien}$</Text>
                                            <Text style={{
                                                width: 220,
                                                alignItems: "center",
                                                textAlign: "center",
                                            }}>{l.checkinDuKien + " -> " + l.checkoutDuKien}</Text>
                                        </View>
                                    </ListItem.Content>
                                </ListItem>
                            ))
                                : ''
                            }
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
        width: 130,
        alignItems: "center",
        textAlign: "center",
    },
    td: {
        width: 130,
        alignItems: "center",
        textAlign: "center",
    }
});
