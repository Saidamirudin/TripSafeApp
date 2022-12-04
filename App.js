import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "./src/screen/SplashSC";
import Login from "./src/screen/Login";
import Register from "./src/screen/Register";
import Home from "./src/screen/Home";


const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="SplashScreen" 
                component={SplashScreen} 
                options={{headerShown : false}}/>
                <Stack.Screen 
                name="Login" 
                component={Login} 
                options={{headerShown : false}}/>
                <Stack.Screen 
                name="Register" 
                component={Register} 
                options={{headerShown : false}}/>
                <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{headerShown : false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default MyStack;