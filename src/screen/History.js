import React from 'react'
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'


const style = StyleSheet.create({
    topText: {
        backgroundColor: '#00AA13',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        flexDirection: 'row'
    },
    txtTop: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 19,
    },
    addList: {
        position: 'absolute',
        marginLeft: 130,
        top: -15
    },
    cardWrap: {
        backgroundColor: '#60D669',
        padding: 10,
        margin: 20,
        borderRadius: 10,
        elevation: 3
    },
    dateCard: {
        fontWeight: '700',
        fontSize: 16,
        color: '#ED6C30'
    },
    txtWrap: {
        marginTop: 10,
        flexDirection: 'row'
    },
    flxText: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtHis: {
        color: 'black',
        fontSize: 16
    }, 
    txtHis2: {
        fontSize: 16,
        color: '#fff',
        marginRight: 30
    }
})

const CardHistory = () => {

    let lokasi = "Jalan Pahlawan";
    let kendala = "Kehabisan BBM";
    let tempatTujuan = "SPBU Wates";
    let waktuKejadian = "20.14 WIB";

    return (
        <TouchableOpacity style={style.cardWrap}>
                <Text style={style.dateCard}>18 Oktober 2022</Text>

                <View style={style.txtWrap}>
                    <View style={{marginRight: 20}}>
                        <Text style={style.txtHis}>Lokasi Kejadian</Text>
                        <Text style={style.txtHis}>Kendala</Text>
                        <Text style={style.txtHis}>Tempat Tujuan</Text>
                        <Text style={style.txtHis}>Jam</Text>
                    </View>
                    <View>
                        <Text style={style.txtHis2}>: {lokasi}</Text>
                        <Text style={style.txtHis2}>: {kendala}</Text>
                        <Text style={style.txtHis2}>: {tempatTujuan}</Text>
                        <Text style={style.txtHis2}>: {waktuKejadian}</Text>
                    </View>
                </View>
            </TouchableOpacity>
    )
}

const History = ({navigation}) => {
    return (
        <ScrollView>
            <View style={style.topText}>
                <Text style={style.txtTop}>
                    Riwayat
                </Text>
                <TouchableOpacity>
                    <Image 
                    style={style.addList}
                    source={require('../asset/icon/addlist.png')}/>
                </TouchableOpacity>
            </View>
            <CardHistory/>

        </ScrollView>
    )
}

export default History;
