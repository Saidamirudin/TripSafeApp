import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'


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
        height: 25,
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
        backgroundColor: 'white',
        elevation: 5
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
        alignItems: 'center',
        elevation: 3
    },
    linkMenu2: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        backgroundColor: '#60D669',
        marginHorizontal: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3
    },
    linkMenu3: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        backgroundColor: '#0667F6',
        marginHorizontal: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3
    },
    linkMenu4: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        backgroundColor: '#FCEA2B',
        marginHorizontal: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3
    },
    linkMenu5: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        backgroundColor: '#FBBC04',
        marginHorizontal: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3
    },
    wrapperMerchant: {
        padding: 10
    },
    merchant: {
        backgroundColor: '#D9D9D9',
        maxWidth: 390,
        borderRadius: 10,
        padding: 10,
        elevation: 3,
        flexDirection: 'row'
    },
    imgMerchant: {
        width: 225,
        height: 130
    },
    wrapTxt: {
        marginLeft: 10
    },
    txtMerchant: {
        fontWeight: 'bold',
        fontSize: 18,
        maxWidth: 150
    },
    txtMerKat: {
        marginTop: 10,
        color: '#EA4335'
    },
    detTxt: {
        maxWidth: 140,
        fontSize: 10
    }
})




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
                        source={require('../asset/icon/maps.png')}
                    />
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
                    onPress={() => navigation.navigate('Merchant')}>
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

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10,
                alignItems: 'center',
            }}>
                <Text style={{
                    fontWeight: '600',
                    fontSize: 20,
                    color: '#00AA13',
                }}
                >Merchant Kami</Text>
                <TouchableOpacity
                >
                    <Text style={{
                        fontWeight: '600',
                        fontSize: 16,
                        color: '#EA4335',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>Lihat Semua</Text>
                </TouchableOpacity>

            </View>

            <TouchableOpacity style={style.wrapperMerchant}
                onPress={() => navigation.navigate('Merchant')}
            >
                <View style={style.merchant}>
                    <Image
                        source={require('../asset/image/lokasi.png')}
                        style={style.imgMerchant}
                    />
                    <View style={style.wrapTxt}>
                        <Text style={style.txtMerchant}>Nama Merchant</Text>
                        <Text style={style.detTxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
                        <Text style={style.txtMerKat}>Kategori</Text>
                    </View>
                </View>
            </TouchableOpacity>


        </ScrollView>
    )
}

export default Home;


