import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'


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
    cardWrapper :{
        marginHorizontal: 10,
        marginVertical: 20
    },
    wrapBox: {
        backgroundColor: '#60D669',
        padding: 10,
        elevation: 2,
        borderRadius:10
    },
    detail: {
        marginBottom: 20
    },
    txtName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    txtCode: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600'
    },
    txtPrice: {
        color: '#EA4335',
        fontWeight: 'bold'
    },
    wrapProgres: {
        position: 'absolute',
        marginLeft: 293,
        backgroundColor: '#FFCE31',
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: 75,
        elevation: 2
    }
})

const BoxCart = () =>{

    let date = '12 Desember 2022';
    let namaBarang = 'Oli MPX MiO 123';
    let codePayment = '77AB11';
    let priceTotal = 55000;
    let detailProgres = 'Diproses';

    return(
        <View style={style.cardWrapper}>
            <Text>{date}</Text>
            <View style={style.wrapBox}>
                <View style={style.detail}>
                    <Text style={style.txtName}>{namaBarang}</Text>
                    <Text style={style.txtCode}>No Pembayaran : {codePayment}</Text>
                </View>
                <View>
                    <Text style={style.txtPrice}>Rp {priceTotal}</Text>
                </View>
                <View style={style.wrapProgres}>
                    <Text style={style.txtProgres}>{detailProgres}</Text>
                </View>
            </View>
        </View>
    )
}

const Keranjang = () => {
    return (
        <ScrollView>
            <View style={style.topText}>
                <Text style={style.txtTop}>
                    Status Pembayaran
                </Text>
            </View>

            <BoxCart/>
            <BoxCart/>
            <BoxCart/>

        </ScrollView>
    )
}

export default Keranjang