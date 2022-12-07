import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

const Home = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={style.wrapperTop}>
                <View style={style.flexTop}>
                    <Text style={style.txtTop}>Halo, Nur Said Amirudin</Text>
                    <TouchableOpacity>
                        <Image source={require('../asset/icon/notif.png')}
                            style={style.icoNotif} />
                    </TouchableOpacity>

                </View>

                <View style={style.searchWrap}>
                    <Image
                        style={style.icoMaps}
                        source={require('../asset/icon/maps.png')} />
                    <TextInput
                        placeholder='Telusuri di sini'
                        style={style.searchInput}></TextInput>
                    <View>
                        <TouchableOpacity >
                            <Image
                                style={style.mic}
                                source={require('../asset/icon/mic.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
            <View style={style.wrapperLink}>
                <TouchableOpacity
                    style={{ alignItems: 'center' }}
                    onPress={() => navigation.navigate('MapsMenu')}>
                    <View style={style.linkMenu1}>
                        <Image
                            source={require('../asset/icon/car.png')} />
                    </View>
                    <Text style={{ textAlign: 'center', maxWidth: 70, fontWeight: 'bold' }}>Bengkel Mobil</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ alignItems: 'center' }}
                    onPress={() => navigation.navigate('MapsMenu')}>
                    <View style={style.linkMenu2}>
                        <Image
                            source={require('../asset/icon/scooter.png')} />
                    </View>
                    <Text style={{ textAlign: 'center', maxWidth: 70, fontWeight: 'bold' }}>Bengkel Motor</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ alignItems: 'center' }}
                    onPress={() => navigation.navigate('MapsMenu')}>
                    <View style={style.linkMenu3}>
                        <Image
                            source={require('../asset/icon/rumahsakit.png')} />
                    </View>
                    <Text style={{ textAlign: 'center', maxWidth: 70, fontWeight: 'bold' }}>Rumah Sakit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ alignItems: 'center' }}
                    onPress={() => navigation.navigate('MapsMenu')}>
                    <View style={style.linkMenu4}>
                        <Image
                            source={require('../asset/icon/spbu.png')} />
                    </View>
                    <Text style={{ textAlign: 'center', maxWidth: 70, fontWeight: 'bold' }}>SPBU</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ alignItems: 'center' }}
                    onPress={() => navigation.navigate('MapsMenu')}>
                    <View style={style.linkMenu5}>
                        <Image
                            source={require('../asset/icon/pertamini.png')} />
                    </View>
                    <Text style={{ textAlign: 'center', maxWidth: 70, fontWeight: 'bold' }}>Pertamini</Text>
                </TouchableOpacity>
            </View>
            <Text style={{
                marginLeft:10, 
                fontWeight: '600', 
                fontSize: 20,
                color: '#00AA13',
                marginTop: 30
                }}
                >Merchant Kami</Text>
            <View  style={style.wrapperMerchant}>
                <View style={style.merchant}>
                </View>
                <View style={style.merchant}>
                </View>
                <View style={style.merchant}>
                </View>
                <View style={style.merchant}>
                </View>
            </View>

        </ScrollView>
    )
}

export default Home;

const style = StyleSheet.create({
    wrapperTop: {
        flexDirection: 'row',
        backgroundColor: '#00AA13',
        padding: 10,
        height: 80,
        justifyContent: 'center'
    },
    flexTop: {
        flexDirection: 'row',
        color: 'white',
        alignContent: 'center'
    },
    icoNotif: {
        marginLeft: 150,
        height: 25
    },
    txtTop: {
        fontSize: 20,
        color: 'white',
        fontWeight: '600',
    },
    searchWrap: {
        position: 'absolute',
        flexDirection: 'row',
        marginTop: 50,
        height: 60,
        width: 330,
        borderRadius: 10,
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    icoMaps: {
        height: 35,
        width: 23
    },
    searchInput: {
        width: 250,
        fontSize: 16,
        marginLeft: 10
    },
    mic: {
        height: 35,
        width: 23
    },
    wrapperLink: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxWidth: 411,
        // borderWidth: 1,
        marginTop: 30,
        padding: 10
    },
    linkMenu1: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        backgroundColor: '#ED6C30',
        marginHorizontal: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    linkMenu2: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        backgroundColor: '#60D669',
        marginHorizontal: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    linkMenu3: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        backgroundColor: '#0667F6',
        marginHorizontal: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    linkMenu4: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        backgroundColor: '#FCEA2B',
        marginHorizontal: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    linkMenu5: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        backgroundColor: '#FBBC04',
        marginHorizontal: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapperMerchant: {
        padding: 10
    },
    merchant: {
        backgroundColor: '#D9D9D9',
        width: 390,
        maxWidth: 390,
        height: 200,
        marginBottom: 10,
        borderRadius: 10
    }
})
