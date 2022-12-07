import { NavigationContainer, useNavigation, useNavigationContainerRef } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { useFlipper } from '@react-navigation/devtools';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { setNavRef } from '../Services/NavigationService';
import HomeScreen from '../Pages/Home';
import LoginScreen from "../Pages/Login"
import TestScreen from '../Pages/Test';
import { Image, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { useRef, useState } from 'react';

const Stack = createStackNavigator();
export const SCREEN_NAMES = {
    Home: "Home",
    Login: "Login",
    Test: "Test",
    TabBar: "TabBar"
}

const Tab = createBottomTabNavigator();

const TabBarConfigs = {
    Home: {
        // normal: images.home.icPondManage,
        // hightlight: images.home.icHightlightPondManage,
        title: "Trang chu"
    },
    Test: {
        // normal: images.home.icPondManage,
        // hightlight: images.home.icHightlightPondManage,
        title: "Test"
    }
}

const MyTabBar = ({ state, descriptors, navigation }) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const ref = useRef(null);

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    return (
        <View center fillParent>
            {state?.routes?.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (<TouchableOpacity fast key={index} center onPress={onPress}>
                    <View center>
                        {/* <Image svg source={TabBarConfigs[route.name]?.normal} style={{ width: scaleSize(30), height: scaleSize(30) }} /> */}
                        <Text fS12 style={{ color: isFocused ? '#673ab7' : '#222' }}>{TabBarConfigs[route.name]?.title}</Text>
                    </View>
                </TouchableOpacity>)
            })}
        </View>
    );
};

function TabBar() {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <Tab.Navigator initialRouteName={SCREEN_NAMES.Home} tabBar={props => <MyTabBar {...props} />} screenOptions={{ headerShown: false }}>
                <Stack.Screen name={SCREEN_NAMES.Home} component={HomeScreen} />
                <Stack.Screen name={SCREEN_NAMES.Test} component={TestScreen} />
            </Tab.Navigator>
        </SafeAreaView>
    )
}

function MainStackScreen() {
    const navigation = useNavigation()

    return (
        <Stack.Navigator initialRouteName={SCREEN_NAMES.Login} screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, headerShown: false }}>
            <Stack.Screen name={SCREEN_NAMES.Login} component={LoginScreen} />

            <Stack.Screen name={SCREEN_NAMES.TabBar} component={TabBar} />
        </Stack.Navigator>
    );
}

export default function AppNavigation() {
    const navigationRef = useNavigationContainerRef();
    setNavRef(navigationRef)
    useFlipper(navigationRef);

    return (
        <NavigationContainer
            ref={navigationRef}
        >
            <Stack.Navigator screenOptions={{ headerMode: "screen" }}>
                <Stack.Screen name="Main" component={MainStackScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
