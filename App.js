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
import MapsDetail from "./src/screen/MapsDetail";
import Chart from "./src/screen/Chart";
import { Image, Pressable, Touchable, TouchableOpacity } from "react-native";
import Merchant from "./src/screen/Merchant";
import KatalogMerchant from "./src/screen/KatalogMerchant";
import ResetPasswordScren from "./src/screen/ResetPasswordScren";
import firebase from "firebase/app";
import DetailProduk from "./src/screen/DetailProduk";
import DaftarPesanan from "./src/screen/DaftarPesanan";

// import { FIREBASE_CONFIG } from "./src/core/config";

// if (!firebase.apps.length) {
//     firebase.initializeApp(FIREBASE_CONFIG)
// }

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyStack = ({navigation}) => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#00AA13'
                    }
                }}
            >
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
                <Stack.Screen
                    name="MapsDetail"
                    component={MapsDetail}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name="Merchant"
                    component={Merchant}
                    options={{
                        title: "Profil Merchant",
                        headerTintColor: 'white',
                        headerTitleAlign: 'center'
                    }} />
                <Stack.Screen
                    name="KatalogMerchant"
                    component={KatalogMerchant}
                    options={{
                        title: "Katalog Merchant",
                        headerTintColor: 'white',
                        headerTitleAlign: 'center'
                    }} />
                <Stack.Screen
                    name="DetailProduk"
                    component={DetailProduk}
                    options={{
                        title: "Detail Produk",
                        headerTintColor: 'white',
                        headerTitleAlign: 'center',
                        headerRight:() => (
                            <TouchableOpacity
                            onPress={() => {navigation.navigate('DaftarPesanan')}}>
                                <Image source={require('./src/asset/icon/cartmerchant.png')}/>
                            </TouchableOpacity>
                        ),
                    }} />
                <Stack.Screen
                    name="DaftarPesanan"
                    component={DaftarPesanan}
                />
                <Stack.Screen
                    name="ResetPasswordScreen"
                    component={ResetPasswordScren}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MyStack;

const TabNav = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#00AA13',
                tabBarInactiveTintColor: '#d8d4d4',
                tabBarLabelStyle: {
                    fontSize: 16,
                    fontWeight: 'bold',
                    paddingBottom: 10
                },
                tabBarStyle: { height: 70, elevation: 5, paddingTop: 10 }
            }}>

            <Tab.Screen name="Beranda" component={Home} options={{
                headerShown: false,
                tabBarIcon: () => <Image style={{ width: 30, height: 30 }} source={require('./src/asset/icon/home.png')} />
            }}
            />
            <Tab.Screen name="Keranjang" component={Chart} options={{
                headerShown: false,
                tabBarIcon: () => <Image style={{ width: 30, height: 30 }} source={require('./src/asset/icon/cart.png')} />
            }}
            />
            <Tab.Screen name="Maps" component={Maps} options={{
                headerShown: false,
                tabBarIcon: () => <Image source={require('./src/asset/icon/maps-nav.png')} />
            }}
            />
            <Tab.Screen name="Aktivitas" component={History} options={{
                headerShown: false,
                tabBarIcon: () => <Image style={{ width: 30, height: 30 }} source={require('./src/asset/icon/history.png')} />
            }}
            />
            <Tab.Screen name="Profil" component={Profil} options={{
                headerShown: false,
                tabBarIcon: () => <Image style={{ width: 30, height: 30 }} source={require('./src/asset/icon/profil.png')} />
            }}
            />

        </Tab.Navigator>
    )
}