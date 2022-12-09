import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from "./src/screen/SplashSC";
import Login from "./src/screen/Login";
import Register from "./src/screen/Register";
import Home from "./src/screen/Home";
import MapsMenu from "./src/screen/MapsMenu";
import Maps from "./src/screen/Maps";
import History from "./src/screen/History";
import Profil from "./src/screen/Profil";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name="HomeSC"
                    component={TabNav}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name="MapsMenu"
                    component={MapsMenu}
                    options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MyStack;

const TabNav = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                // labelStyle: {
                //     fontSize: 16,
                //     color: '#00AA13',
                //     paddingBottom: 10,
                //     fontWeight: 'bold'
                // }
                tabBarActiveTintColor: '#00AA13',
                tabBarInactiveTintColor: '#d8d4d4',
                tabBarLabelStyle: {
                    fontSize: 16,
                    fontWeight: 'bold',
                    paddingBottom: 10
                }
            }}>
            <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Tab.Screen name="Maps" component={Maps} options={{headerShown: false}} />
            <Tab.Screen name="History" component={History} options={{ headerShown: false }} />
            <Tab.Screen name="Profil" component={Profil} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}