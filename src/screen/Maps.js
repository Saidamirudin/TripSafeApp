import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
// import MapView from 'react-native-maps'


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
})

const Maps = () => {
    return (
        <View>
            <View style={style.topText}>
                <Text style={style.txtTop}>
                    Maps - Lokasi Anda Sekarang
                </Text>
            </View>
            {/* <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <MapView.Marker
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }}
                    title="My Marker"
                    description="Some description"
                />
            </MapView> */}
        </View>
    )
}

export default Maps