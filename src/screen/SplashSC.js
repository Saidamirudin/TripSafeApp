import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login')
        }, 3000)
    })

    return (
        <View>
            <View style={stylesSplash.flexRoot}>
                <Image source={require('../asset/image/LOGO.png')}/>
            </View>
            <View>
                <Text style={stylesSplash.Text4}>Powered by Said Amirudin</Text>
            </View>
        </View>
    );
};

export default SplashScreen;


const stylesSplash = StyleSheet.create({
    flexRoot: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 140
    },
    Text4: {
        textAlign: 'center',
        marginTop: 500
    }
});