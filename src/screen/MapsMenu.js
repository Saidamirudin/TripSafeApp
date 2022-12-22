import React from 'react'
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const style = StyleSheet.create({
    topText: {
        height: 50,
        backgroundColor: '#00AA13',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3
    },
    txtTop: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 19
    },
    wrapMaps: {
        height: 690,
        backgroundColor: 'skyblue'
    },
    flexLokasi: {
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: '#d8d4d4',
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        elevation: 3
    },
    imgLokasi: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        marginRight: 20
    },
    icoLokasi: {
        marginLeft: 70,
        width: 40,
        height: 40
    }
})

const Lokasi = ({ navigation }) => {
    return (
        <View> </View>
    )
}

const MapsMenu = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={style.topText}>
                <Text style={style.txtTop}>
                    Lokasi Tempat Terdekat
                </Text>
            </View>

            <View style={style.wrapMaps}></View>
            
            <TouchableOpacity
            onPress={() => navigation.navigate('MapsDetail')}>
            <View style={style.flexLokasi}>
                <Image 
                source={require('../asset/image/lokasi.png')}
                style={style.imgLokasi}
                ></Image>
                <View>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Nama Tempat</Text>
                        <Text>0,8 KM</Text>
                    </View>
                    <Text>Jl Konoha No 21, Yogyakarta</Text>
                </View>
                <Image style={style.icoLokasi}
                    source={require('../asset/icon/lokasi.png')}
                ></Image>
            </View>
        </TouchableOpacity>
        </ScrollView>

    )
}

export default MapsMenu