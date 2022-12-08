import * as React from "react";
import { Header } from "@rneui/base";

export default () => {
    return (
        <Header
            backgroundColor="#f57b51"
            backgroundImageStyle={{}}
            barStyle="default"
            centerComponent={{
                text: "HOMIE HOTEL",
                style: {
                    color: "#fff",
                    fontSize: 18
                }
            }}
            centerContainerStyle={{}}
            containerStyle={{ width: "100%" }}
            leftComponent={{ icon: "menu", color: "#fff" }}
            leftContainerStyle={{}}
            linearGradientProps={{}}
            placement="center"
            rightComponent={{ icon: "home", color: "#fff" }}
            rightContainerStyle={{}}
            statusBarProps={{}}
        />
    );
}