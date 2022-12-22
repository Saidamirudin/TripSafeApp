import React from 'react'
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native'


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
        fontWeight: 'bold',
        fontSize: 19
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
        marginTop: 10
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
    return (
        <TouchableOpacity style={style.cardWrap}>
                <Text style={style.dateCard}>18 Oktober 2022</Text>

                <View style={style.txtWrap}>
                    <View style={style.flxText}>
                        <Text style={style.txtHis}>Lokasi Kejadian</Text>
                        <Text style={style.txtHis2}>: Jalan Pahlawan</Text>
                    </View>
                    <View style={style.flxText}>
                        <Text style={style.txtHis}>Kendala</Text>
                        <Text style={style.txtHis2}>: Kehabisan BBM</Text>
                    </View>
                    <View style={style.flxText}>
                        <Text style={style.txtHis}>Tempat Tujuan</Text>
                        <Text style={style.txtHis2}>: SPBU Pahlawan</Text>
                    </View>
                    <View style={style.flxText}>
                        <Text style={style.txtHis}>Jam</Text>
                        <Text style={style.txtHis2}>: 20.14 WIB</Text>
                    </View>
                </View>
            </TouchableOpacity>
    )
}

const History = () => {
    return (
        <ScrollView>
            <View style={style.topText}>
                <Text style={style.txtTop}>
                    Riwayat
                </Text>
            </View>
            {/* komponen card */}
            <CardHistory/>

        </ScrollView>
    )
}

export default History;
