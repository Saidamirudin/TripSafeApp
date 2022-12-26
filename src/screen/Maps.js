import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
// import MapboxGL from '@rnmapbox/maps'

// MapboxGL.setAccessToken("pk.eyJ1Ijoic2FpZGFtbWlyLTgwIiwiYSI6ImNsYnlzMG52ZzJoeDEzbm50NDhneGs5NTAifQ.q_dkQuhpEW6WqtwK9myGWA");
// MapboxGL.setWellKnownTileServer(MapboxGL.Mapbox);
// MapboxGL.setWellKnownTileServer("Mapbox");

const style = StyleSheet.create({
    topText: {
        backgroundColor: '#00AA13',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3
    },
    txtTop: {
        color: 'white',
        fontSize: 19,
        fontWeight: 'bold'
    },
    wrapMapbox: {
        height: 590,
        backgroundColor: 'skyblue '
    },
    wrapLocation: {
        height: 60,
        backgroundColor: '#0FDC26',
        flexDirection: 'row',
        elevation: 3
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
        marginRight: 10,
        elevation: 5
    },
    share: {
        width: 30,
        height: 30,
        elevation: 5
    }
})

const Maps = () => {

    // const [coordinates] = useState([8.674252499999994, 9.0845755]);

    return (
        <View>
            <View style={style.topText}>
                <Text style={style.txtTop}>
                    Maps - Lokasi Anda Sekarang
                </Text>
            </View>
            <View style={style.wrapMapbox}>
                {/* <MapboxGL.MapView style={style.wrapMapbox}>
                    <MapboxGL.Camera zoomLevel={6}
                        centerCoordinate={coordinates} />
                    <MapboxGL.PointAnnotation coordinate={coordinates} />
                </MapboxGL.MapView> */}
            </View>
            <View style={style.wrapLocation}>
                <View style={style.detInfo}>
                    <Text style={style.txtInfo}>Titik Koordinat Lokasi Anda :</Text>
                    <Text style={style.txtKoor}>.............................</Text>
                </View>
                <View style={style.wrapTouch}>
                    <TouchableOpacity>
                        <Image style={style.copy} source={require('../asset/icon/copy.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={style.share} source={require('../asset/icon/share.png')}></Image>
                    </TouchableOpacity>


                </View>
            </View>
        </View>
    )
}

export default Maps;