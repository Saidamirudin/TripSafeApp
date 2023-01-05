import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'

const style = StyleSheet.create({
    cardKategori: {
        width: 150,
        height: 40,
        marginVertical: 15, 
        marginLeft: 10,
        borderRadius: 20,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#EA4335'
    },
    txtKategori: {
        color: '#EA4335'
    },
    wrapperLink: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxWidth: 411,
        padding: 10,
        paddingBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    linkProduk: {
        width: 180,
        height: 180,
        borderRadius: 10, 
        marginRight: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        elevation: 3
    },
    imgProduk: {
        width: 180,
        height: 120,
        borderRadius: 10
    },
    txtNamaProduk: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 16,
        overflow: 'hidden',
        fontWeight: '700'
    },
    txtHarga: {
        marginLeft: 10,
        color: '#EA4335',
        fontWeight: '500'
    }
})

const KatalogMerchant = ({navigation}) => {

    let namaProduk = 'Produk xyz';
    let harga = 50000;
    return (
        <View>
            <ScrollView horizontal>
                <TouchableOpacity style={style.cardKategori}>
                    <Text style={style.txtKategori}>Kategori Produk</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.cardKategori}>
                    <Text style={style.txtKategori}>Kategori Produk</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.cardKategori}>
                    <Text style={style.txtKategori}>Kategori Produk</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.cardKategori}>
                    <Text style={style.txtKategori}>Kategori Produk</Text>
                </TouchableOpacity>
            </ScrollView>

            <ScrollView >
                <View style={style.wrapperLink}>
                <TouchableOpacity
                    style={{ alignItems: 'center' }}
                    onPress={() => navigation.navigate('DetailProduk')}>
                    <View style={style.linkProduk}>
                        <Image
                        style={style.imgProduk}
                        source={require('../asset/image/lokasi.png')} />
                        <Text style={style.txtNamaProduk}>{namaProduk}</Text>
                        <Text style={style.txtHarga}>Rp {harga}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ alignItems: 'center' }}
                    onPress={() => navigation.navigate('DetailProduk')}>
                    <View style={style.linkProduk}>
                        <Image
                        style={style.imgProduk}
                        source={require('../asset/image/lokasi.png')} />
                        <Text style={style.txtNamaProduk}>{namaProduk}</Text>
                        <Text style={style.txtHarga}>Rp {harga}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ alignItems: 'center' }}
                    onPress={() => navigation.navigate('DetailProduk')}>
                    <View style={style.linkProduk}>
                        <Image
                        style={style.imgProduk}
                        source={require('../asset/image/lokasi.png')} />
                        <Text style={style.txtNamaProduk}>{namaProduk}</Text>
                        <Text style={style.txtHarga}>Rp {harga}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ alignItems: 'center' }}
                    onPress={() => navigation.navigate('DetailProduk')}>
                    <View style={style.linkProduk}>
                        <Image
                        style={style.imgProduk}
                        source={require('../asset/image/lokasi.png')} />
                        <Text style={style.txtNamaProduk}>{namaProduk}</Text>
                        <Text style={style.txtHarga}>Rp {harga}</Text>
                    </View>
                </TouchableOpacity>
                
                

                </View>
                <View style={{marginTop: 20, width: 400, height: 20}}></View>
            </ScrollView>
        </View>
    )
}

export default KatalogMerchant