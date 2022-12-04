import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login')
        }, 3000)
    })

    return (
        <View>
            <View style={stylesSplash.flexRoot}>
                <Text style={stylesSplash.Text1}>myTrip </Text>
                <Text style={stylesSplash.Text2}>safe</Text>
            </View>
            <Text style={stylesSplash.Text3}>Nikmati Perjalanan Anda Dengan Aman</Text>
            <View>
                <Text style={stylesSplash.Text4}>Powered by Said Amirudin</Text>
            </View>
        </View>
    );
};

export default SplashScreen;


const stylesSplash = StyleSheet.create({
    Text1: {
        color: 'black',
        fontSize: 40,
        marginTop: 100,
        fontWeight: 'bold'
    },
    Text2: {
        color: 'green',
        fontSize: 40,
        marginTop: 100,
        fontWeight: 'bold'
    },
    flexRoot: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    Text3: {
        fontSize: 10,
        fontFamily: 'arial',
        marginLeft: 140
    },
    Text4: {
        textAlign: 'center',
        marginTop: 550
    }
});