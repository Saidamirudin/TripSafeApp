import { width } from 'deprecated-react-native-prop-types/DeprecatedImagePropType'
import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    txtTop: {
        alignSelf: 'center',
        color: '#000'
    },
    wrapCard: {
        marginTop: 10,
        backgroundColor: '#60D669',
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
        height: 500
    },
    wrapNo: {
        height: 50,
        backgroundColor: '#EA4335',
        justifyContent: 'center',
        alignItems: 'center',
        width: 370,
        borderRadius: 15
    },
    noPesan: {
        fontSize: 17,
        fontWeight: '900'
    },
    imgBank: {
        marginVertical: 10,
        width: 280,
        height: 170
    },
    txtBank: {
        maxWidth: 250,
        textAlign: 'center',
        color: '#EA4335',
        fontSize: 16
    },
    wrapDeskripsi: {
        marginVertical: 20
    },
    txtDeskripsi: {
        textAlign: 'justify',
        fontSize: 16,
        marginHorizontal: 10,
        color: '#fff'
    },
    buttonBTM: {
        marginVertical: 15,
        marginTop: 100,
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
})

const Pembayaran = ({navigation}) => {
    let noPemesanan = 'ABC123'
    return (
        <View style={styles.container}>
            <Text style={styles.txtTop}>Terima Kasih Pesanan Diproses</Text>
            <View style={styles.wrapCard}>
                <View style={styles.wrapNo}>
                    <Text style={styles.noPesan}>No Pemesanan : {noPemesanan}</Text>
                </View>
                <Image 
                style={styles.imgBank}
                source={require('../asset/image/bankmerchant.jpg')} />
                <Text style={styles.txtBank}>Bank BRI - 123243546547
                    a/n. Merchant Rekening
                </Text>
                <View style={styles.wrapDeskripsi}>
                    <Text style={styles.txtDeskripsi}>
                    Orderan anda Akan Segera kami proses 1x24 Jam Setelah Anda Melakukan Pembayaran ke ATM kami dan menyertakan informasi pribadi yang melakukan pembayaran seperti Nama Pemilik Rekening / Sumber Dana, Tanggal Pembayaran, Metode Pembayaran dan Jumlah Bayar.
                    </Text>
                </View>
            </View>
            <View style={{ backgroundColor: '#fff', marginTop: 10 }}>
                <TouchableOpacity style={styles.buttonBTM}
                    onPress={() => navigation.navigate('VerifikasiPembayaran')}
                >
                    <Text style={styles.txtButtonBTM}>Lanjut Pembayaran</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Pembayaran