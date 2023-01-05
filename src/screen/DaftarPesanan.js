import React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native'

const style = StyleSheet.create({
  cardWrap: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginVertical: 10
  },
  imgCard: {
    width: 120, height: 80
  },
  wrapTxt: {
    width: 180
  },
  nameProduk: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
  },
  noPesanan: {
    color: '#000'
  },
  hargaTxt: {
    color: '#EA4335',
    marginTop: 20
  },
  wrapBtn: {
    flexDirection: 'row',
    marginTop: 15
  },
  txtJumlah: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
    marginHorizontal: 20
  },
  wrapDelete: {
    position: 'absolute',
    marginTop: 50,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  txtHapus: {
    color: '#EA4335',
    marginRight: 10
  },
  wrapBottom: {
    marginTop: 320,
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },
  txtRingkasan: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    marginBottom: 10
  },
  flexBtm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50
  },
  hargaBtm: {
    color: '#EA4335',
    fontSize: 15
  },
  noCheckout: {
    fontSize: 18,
    fontWeight: '500',
    color: '#00AA13'
  },
  txt: {
    color: '#000',
    fontSize: 15
  },
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
})

const DaftarPesanan = ({ navigation }) => {
  let resultJumlah = 7;
  let jmlPesanan = 12;
  let harga = 50000;
  let totalHarga = 1300000;
  let noPemesanan = '3323DD';
  return (
    <View>
      <ScrollView>
        <View style={style.cardWrap}>
          <View>
            <Image
              style={style.imgCard}
              source={require('../asset/image/produk.jpg')} />
          </View>
          <View style={style.wrapTxt}>
            <Text style={style.nameProduk}>Nama Produk</Text>
            <Text style={style.noPesanan}>No Pesanan</Text>
            <Text style={style.hargaTxt}>Rp {harga}</Text>
          </View>
          <View style={style.wraIco}>
            <View style={style.wrapBtn}>
              <TouchableOpacity>
                <Image style={{ width: 18, height: 18 }} source={require('../asset/icon/greenMin.png')} />
              </TouchableOpacity>
              <Text style={style.txtJumlah}>{resultJumlah}</Text>
              <TouchableOpacity>
                <Image style={{ width: 20, height: 20 }} source={require('../asset/icon/greenPlus.png')} />
              </TouchableOpacity>
            </View>
            <View style={style.wrapDelete}>
              <Text style={style.txtHapus}>Hapus</Text>
              <TouchableOpacity>
                <Image source={require('../asset/icon/delete.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={style.wrapBottom}>
        <Text style={style.txtRingkasan}>Ringkasan Pemesanan</Text>
        <View style={style.flexBtm}>
          <View>
            <Text style={style.txt}>Total Jumlah</Text>
            <Text style={style.txt}>Harga Total</Text>
          </View>
          <View>
            <Text style={style.txt}>{jmlPesanan}</Text>
            <Text style={style.hargaBtm}>Rp {totalHarga}</Text>
          </View>
        </View>
        <Text style={style.noCheckout}>No Pemesanan : {noPemesanan}</Text>
      </View>
      <View style={{ backgroundColor: '#fff', marginTop: 10 }}>
        <TouchableOpacity style={style.buttonBTM}
          onPress={() => navigation.navigate('PembayaranPesanan')}
        >
          <Text style={style.txtButtonBTM}>Pesan</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default DaftarPesanan