import React from 'react'
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const style = StyleSheet.create({
    topText: {
        height: 50,
        backgroundColor: '#00AA13',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtTop: {
        fontWeight: 'bold',
        color: 'white'
    },
    wrapMaps: {
        height: 690,
        backgroundColor: 'skyblue'
    },
    flexLokasi: {
        margin: 15,
        backgroundColor: '#d8d4d4',
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10
    },
    imgLokasi: {
        width: 40,
        height: 40,
        backgroundColor: 'white'
    }
})

const MapsMenu = () => {
    return (

        <ScrollView>
            <View style={style.topText}>
                <Text style={style.txtTop}>
                    Lokasi Tempat Terdekat
                </Text>
            </View>
            <View style={style.wrapMaps}></View>
            <TouchableOpacity style={style.flexLokasi}>
                <Image style={style.imgLokasi}></Image>
                <View>
                    <View>
                        <Text>Nama Tempat</Text>
                        <Text>0,8 KM</Text>
                    </View>
                    <Text>Jl Konoha No 21, Yogyakarta</Text>
                </View>
                <Image style={style.icoLokasi}></Image>
            </TouchableOpacity>
        </ScrollView>

    )
}

export default MapsMenu