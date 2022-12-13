import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const style = StyleSheet.create({
    topText: {
        backgroundColor: '#00AA13',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtTop: {
        color: 'white',
        fontSize: 19,
        fontWeight: 'bold'
    },
    wrapMapbox: {
        height: 610,
        backgroundColor: 'skyblue'
    },
    wrapLocation: {
        height: 60,
        backgroundColor: '#0FDC26',
        flexDirection: 'row'
    },
    detInfo: {
        flex: 3,
        padding: 5
    },
    wrapTouch: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    txtInfo: {
        fontSize: 15,
        fontWeight: '700',
    },
    txtKoor: {
        fontSize: 15
    },
    copy: {
        width: 30,
        height: 30,
        marginRight: 10
    },
    share: {
        width: 30,
        height: 30
    }
})

const Maps = () => {
    return (
        <View>
            <View style={style.topText}>
                <Text style={style.txtTop}>
                    Maps - Lokasi Anda Sekarang
                </Text>
            </View>
            <View style={style.wrapMapbox}>

            </View>
            <View style={style.wrapLocation}>
                <View style={style.detInfo}>
                    <Text style={style.txtInfo}>Titik Koordinat Lokasi Anda :</Text>
                    <Text style={style.txtKoor}>.............................</Text>
                </View>
                <View style={style.wrapTouch}>
                    <Image style={style.copy} source={require('../asset/icon/copy.png')}></Image>
                    <Image style={style.share} source={require('../asset/icon/share.png')}></Image>
                </View>
            </View>
        </View>
    )
}

export default Maps