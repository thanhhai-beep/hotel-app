import { NavigationContainer, useNavigation, useNavigationContainerRef } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { useFlipper } from '@react-navigation/devtools';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { setNavRef } from '../Services/NavigationService';
import HomeScreen from '../Pages/Home';
import LoginScreen from "../Pages/Login"
import { Image, SafeAreaView, Text, View } from 'react-native';
import { useRef, useState } from 'react';

const Stack = createStackNavigator();
export const SCREEN_NAMES = {
    Home: "Home",
    Login: "Login",
}

const Tab = createBottomTabNavigator();

const TabBarConfigs = {
    Home: {
        // normal: images.home.icPondManage,
        // hightlight: images.home.icHightlightPondManage,
        title: "Trang chu"
    },
}

const MyTabBar = React.memo(({ state, descriptors, navigation }) => {
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

                const SIZE = 4;

                if (isFocused)
                    return (<View fast key={index} style={{ width: Metrics.screenWidth / SIZE }} center onPress={onPress}>
                        <View center>
                            <Image svg source={TabBarConfigs[route.name]?.hightlight} style={{ width: scaleSize(30), height: scaleSize(30) }} />
                            <Text fS12 bold>{TabBarConfigs[route.name]?.title}</Text>
                        </View>
                    </View>);
                return (<View fast key={index} style={{ width: Metrics.screenWidth / SIZE }} center onPress={onPress}>
                    <View center>
                        <Image svg source={TabBarConfigs[route.name]?.normal} style={{ width: scaleSize(30), height: scaleSize(30) }} />
                        <Text fS12 color={colors.greyScale500}>{TabBarConfigs[route.name]?.title}</Text>
                    </View>
                </View>)
            })}
        </View>
    );
});

function TabBar() {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <Tab.Navigator initialRouteName={SCREEN_NAMES.Task} tabBar={props => <MyTabBar {...props} />} screenOptions={{ headerShown: false }}>
                <Stack.Screen name={SCREEN_NAMES.Home} component={HomeScreen} />
                <Stack.Screen name={SCREEN_NAMES.Login} component={LoginScreen} />
            </Tab.Navigator>
        </SafeAreaView>
    )
}

function MainStackScreen() {
    const navigation = useNavigation()

    return (
        <Stack.Navigator initialRouteName={SCREEN_NAMES.Intro} screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, headerShown: false }}>
            <Stack.Screen name={SCREEN_NAMES.Login} component={LoginScreen} />
            <Stack.Screen name={SCREEN_NAMES.Home} component={HomeScreen} />

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
