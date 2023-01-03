import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const style = StyleSheet.create({
    buttonBTM: {
        marginVertical: 15,
        marginTop: 10,
        width: 370,
        height: 50,
        marginHorizontal: 20,
        backgroundColor: '#00AA13',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 3
    },
    txtButtonBTM: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    wrap1: {
        backgroundColor: '#fff',
        padding: 10
    },
    imgProduk: {
        width: 390,
        height: 200,
    },
    txtNamaProduk: {
        fontSize:  18,
        fontWeight: '700',
        marginTop: 10,
        color: '#000'
    },
    txtHarga: {
        color: '#EA4335',
        fontWeight: '500'
    },
    wrap2: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#fff',
        height: 200
    },
    txtSpek: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000'
    },
    txtDeskripsi: {
        textAlign: 'justify',
        marginTop: 10
    },
    wrap3: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center'
    },
    txtBooking: {
        fontSize: 16,
        color: '#000',
        fontWeight: '600'
    },
    bookingWrap: {
        flexDirection: 'row',
        marginLeft: 200
    },
    txtJumlah: {
        marginHorizontal: 10,
        fontWeight: '900'
    }
})

const DetailProduk = () => {

    let namaProduk = "Produk ABC";
    let harga = 50000;
    let resultJumlah = 7;
    
    return (
        <View>
            <View style={style.wrap1}>
                <Image
                style={style.imgProduk}
                source={require('../asset/image/lokasi.png')} />
                <Text style={style.txtNamaProduk}>{namaProduk}</Text>
                <Text style={style.txtHarga}>Rp {harga}</Text>
            </View>
            <View style={style.wrap2}>
                <Text style={style.txtSpek}>Spesifikasi</Text>
                <Text style={style.txtDeskripsi}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non</Text>
            </View>
            <View style={style.wrap3}>
                <Text style={style.txtBooking}>Jumlah Booking</Text>
                <View style={style.bookingWrap}>
                    <TouchableOpacity>
                        <Image source={require('../asset/icon/minProduk.png')} />
                    </TouchableOpacity>
                    <Text style={style.txtJumlah}>{resultJumlah}</Text>
                    <TouchableOpacity>
                        <Image source={require('../asset/icon/addProduk.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <TouchableOpacity style={style.buttonBTM}
                // onPress={() => navigation.navigate('KatalogMerchant')}
                >
                    <Text style={style.txtButtonBTM}>Lanjut Booking</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DetailProduk