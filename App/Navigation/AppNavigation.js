import { NavigationContainer, useNavigation, useNavigationContainerRef } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { useFlipper } from '@react-navigation/devtools';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { setNavRef } from '../Services/NavigationService';
import HomeScreen from '../Pages/Home';
import LoginScreen from "../Pages/Login"
import ServicesScreen from '../Pages/Service';
import AccountScreen from '../Pages/Setting';
import RoomScreen from '../Pages/Room';
import ProfileScreen from '../Pages/Setting/Profile'
import RoomDetailScreen from '../Pages/Room/RoomDetail'
import RoomTypeScreen from '../Pages/Room/RoomType';
import ContactScreen from '../Pages/Home/ContactUs';
import AboutScreen from '../Pages/Home/AboutUs';
import HistoryScreen from '../Pages/Setting/BookingHistory';
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import RegisterScreen from '../Pages/Login/Register';

const Stack = createStackNavigator();
export const SCREEN_NAMES = {
    Home: "Home",
    Login: "Login",
    Service: "Service",
    TabBar: "TabBar",
    Account: "Account",
    Room: "Room",
    Register: "Register",
    History: "History",
    Profile: "Profile",
    RoomDetail: "RoomDetail",
    RoomTypeList: "RoomTypeList",
    Contact: "Contact",
    About: "About"
}

const Tab = createBottomTabNavigator();

const TabBarConfigs = {
    Home: {
        title: "Home",
        icon: "home"
    },
    Service: {
        title: "Services",
        icon: "forward"
    },
    Account: {
        title: "Account",
        icon: "user-circle"
    },
    Room: {
        title: "Room",
        icon: "bed"
    },
}

const MyTabBar = ({ state, descriptors, navigation }) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const ref = useRef(null);

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    return (
        <View center fillParent style={styles.navbar}>
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

                return (<TouchableOpacity fast key={index} center onPress={onPress} style={styles.tabItem} >
                    <View center style={styles.navItem}>
                        <Icon name={TabBarConfigs[route.name]?.icon}
                            style={styles.navIcon} style={{ color: isFocused ? '#f57b51' : '#615d5d', fontSize: 20, }}>
                        </Icon>
                        <Text fS12 style={styles.navTitle, { color: isFocused ? '#f57b51' : '#615d5d' }}>
                            {TabBarConfigs[route.name]?.title}
                        </Text>
                    </View>
                </TouchableOpacity>)
            })}
        </View>
    );
};

function TabBar() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#f57b51" }}>
            <Tab.Navigator initialRouteName={SCREEN_NAMES.Home} tabBar={props => <MyTabBar {...props} />} screenOptions={{ headerShown: false }}>
                <Stack.Screen name={SCREEN_NAMES.Home} component={HomeScreen} />
                <Stack.Screen name={SCREEN_NAMES.Service} component={ServicesScreen} />
                <Stack.Screen name={SCREEN_NAMES.Room} component={RoomScreen} />
                <Stack.Screen name={SCREEN_NAMES.Account} component={AccountScreen} />
                <Stack.Screen name={SCREEN_NAMES.History} component={HistoryScreen} />
                <Stack.Screen name={SCREEN_NAMES.Profile} component={ProfileScreen} />
                <Stack.Screen name={SCREEN_NAMES.RoomDetail} component={RoomDetailScreen} />
                <Stack.Screen name={SCREEN_NAMES.RoomTypeList} component={RoomTypeScreen} />
                <Stack.Screen name={SCREEN_NAMES.Contact} component={ContactScreen} />
                <Stack.Screen name={SCREEN_NAMES.About} component={AboutScreen} />
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
            <Stack.Screen name={SCREEN_NAMES.Register} component={RegisterScreen} />
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

const styles = StyleSheet.create({
    navbar: {
        flex: 0.08,
        color: "#0000",
        backgroundColor: "#f6f6f6",
        height: 20,
        flexDirection: "row",
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        // width: "100%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        elevation: 21,
    },
    tabItem: {
        width: "25%",
    },
    navItem: {
        // width: 100,
        alignItems: "center",
        textAlign: "center",
    },
    navIcon: {
        alignItems: "center",
        textAlign: "center",
        fontSize: 20,
    },
    navTitle: {
        fontWeight: 600,
    }
});