import * as React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

export default () => {
    return (
        <View style={styles.headerFooterStyle}>
            <View style={styles.footer}>
                <View style={styles.footerItem}>
                    <Text style={styles.footerTitle}>Contact Us</Text>
                    <Text style={styles.contact}><Icon name="location-outline" />  590 Cach Mang Thang 8, Ward 11, District 3, Ho Chi Minh City.</Text>
                    <Text style={styles.contact} onPress={() => { Linking.openURL('tel:0837418189'); }}><IconF name="phone" />  +84 837 418 189</Text>
                    <Text style={styles.contact} onPress={() => Linking.openURL('mailto:BambuuHotel@fpt.edu.vn?subject=SendMail&body=Description')}><IconM name="email-open-outline" /> BambuuHotel@fpt.edu.vn</Text>
                </View>
                {/* <View style={{ width: "47%", paddingLeft: 15 }}>
                    <Text style={styles.footerTitle}>Useful Links</Text>
                    <Text style={styles.contact}><Icon name="location-outline" />  590 Cach Mang Thang 8, Ward 11, District 3, Ho Chi Minh City.</Text>
                    <Text style={styles.contact}><IconF name="phone" />  +84 123 456 789</Text>
                    <Text style={styles.contact}><IconM name="email-open-outline" /> BambuuHotel@fpt.edu.vn</Text>
                </View> */}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    headerFooterStyle: {
        backgroundColor: '#222',
        padding: 25,
    },
    footer: {
        flexDirection: "row",
    },
    footerItem: {
        width: "100%",
    },
    footerTitle: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 20,
        marginBottom: 21
    },
    contact: {
        color: "#fff",
        fontSize: 15,
        marginBottom: 8,
    }
});