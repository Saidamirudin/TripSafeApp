import React from 'react'
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const style = StyleSheet.create({
    topText: {
        height: 50,
        backgroundColor: '#00AA13',
        alignItems: 'center',
        justifyContent: 'center',
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
    popupJarak: {
        height: 60,
        backgroundColor: '#60D669',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    ketJarak: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 4
    },
    clkOK: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    okTxt:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#EA4335'
    },
    wrapDetMaps: {
        margin: 10
    },
    txtTempat: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    flexStar: {
        flexDirection: 'row',
        marginBottom: 10
    },
    txtDet: {
        color: 'grey'
    },
    txtJam: {
        marginVertical: 10,
        fontWeight: 'bold',
        fontSize: 16
    },
    dayOpen: {
        flexDirection: 'row',
    },
    txtDay: {
        marginRight: 10,
        color: 'grey'
    },
    txtOpen: {
        fontWeight: 'bold'
    },
    flexBTN: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20
    },
    icoBTN: {
        marginRight: 20
    },
    btnTelp: {
        height: 50,
        borderWidth: 4,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#00AA13',
        width: 180
    },
    btnWA: {
        height: 50,
        padding: 10,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#00AA13',
        width: 180,
    },
    txtBTNtlp: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#00AA13'
    },
    txtBTNwa: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    }
})
const PopUpJarak = () => {
    return (
        <View style={style.popupJarak}>
            <Text style={style.ketJarak}>
                Jarak dari lokasi anda ke lokasi (Nama  Tempat) +/- 3 Menit
            </Text>
            <TouchableOpacity
            style={style.clkOK}>
                <Text style={style.okTxt}>OK</Text>
            </TouchableOpacity>
        </View>
    )
}

const ImageLokasi = () => {
    return (
        <View>
            <Image style={style.ImgSementara} />
        </View>
    )
}

const DayOpen = () => {
    return (
        <View style={style.dayOpen}>
            <View>
                <Text style={style.txtDay}>Nama Hari</Text>
            </View>
            <View>
                <Text style={style.txtOpen}>08.20 - 22.00</Text>
            </View>
        </View>
    )
}
const MapsDetail = () => {
    var alamat = 'Tempat alamat pada peta detail';
    return (
        <ScrollView>
            <View style={style.topText}>
                <Text style={style.txtTop}>Maps Detail</Text>
            </View>

            <View style={style.wrapMaps}></View>

            <PopUpJarak />

            <View style={style.wrapDetMaps}>
                <View>
                    <Text style={style.txtTempat}>Nama Tempat Dan Detailnya</Text>
                    <View style={style.flexStar}>
                        <Image source={require('../asset/icon/star.png')} />
                        <Image source={require('../asset/icon/star.png')} />
                        <Image source={require('../asset/icon/star.png')} />
                        <Image source={require('../asset/icon/star.png')} />
                    </View>
                    <Text style={style.txtDet}>Detail Alamat : {alamat}</Text>
                </View>
                <View>
                    <Text style={style.txtJam}>Jam Pelayanan</Text>

                    <DayOpen />
                    <DayOpen />
                    <DayOpen />
                    <DayOpen />
                    <DayOpen />
                    <DayOpen />
                    <DayOpen />
                    
                    <View>
                        <ImageLokasi style={style.imgLokasi} />
                    </View>
                </View>
                
                <View style={style.flexBTN}>
                    <TouchableOpacity>
                        <View style={style.btnTelp}>
                            <Image style={style.icoBTN} source={require('../asset/icon/phonecall.png')} />
                            <Text style={style.txtBTNtlp}>Telephone</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={style.btnWA}>
                            <Image style={style.icoBTN} source={require('../asset/icon/whatsapp.png')} />
                            <Text style={style.txtBTNwa}>Whatsapp</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default MapsDetail;