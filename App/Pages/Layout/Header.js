import * as React from "react";
import { Header } from "@rneui/base";
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

export default () => {
    const navigation = useNavigation();
    return (
        <Header
            backgroundColor="#f57b51"
            backgroundImageStyle={{}}
            barStyle="default"
            centerComponent={{
                text: "BAMBUU HOTEL",
                style: {
                    color: "#fff",
                    fontSize: 18
                }
            }}
            centerContainerStyle={{}}
            containerStyle={{ width: "100%" }}
            linearGradientProps={{}}
            placement="center"
            rightComponent={
                <TouchableOpacity onPress={() => { navigation.navigate({ name: 'Home' }) }}>
                    <Icon name="home" style={{ fontSize: 20, color: "#fff" }} />
                </TouchableOpacity>
            }
            rightContainerStyle={{}}
            statusBarProps={{}}
        />
    );
}