import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'

const style = StyleSheet.create({
  topText: {
    height: 50,
    backgroundColor: '#00AA13',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3
  },
  txtTop: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 19
  },
  imgLokasi: {
    alignSelf: 'center',
    width: 412
  },
  imgLokasi2: {
    height: 100,
    width: 100
  },
  wrapMerchant1: {
    backgroundColor: '#ffff',
    padding: 15,
    flexDirection: 'row'
  },
  wrapMerchant2: {
    marginTop: 10,
    backgroundColor: '#ffff',
    padding: 15,
  },
  wrapMerchant3: {
    marginTop: 10,
    backgroundColor: '#ffff',
    padding: 15,
    height: 180
  },
  katalog: {
    marginVertical: 15,
    width: 370,
    height: 50,
    marginHorizontal: 20,
    backgroundColor: '#00AA13',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 3
  },
  txtKatalog: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }

})

const Merchant = ({navigation}) => {

  let Kategori = 'Bengkel';

  return (
    <ScrollView>
      <Image
        source={require('../asset/image/lokasi.png')}
        style={style.imgLokasi} />

      <View style={style.wrapMerchant1}>
        <Image
          source={require('../asset/image/lokasi.png')}
          style={style.imgLokasi2} />
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>Nama Merchant</Text>
          <Text style={{ color: '#EA4335' }}>Kategori : {Kategori}</Text>
        </View>
      </View>

      <TouchableOpacity style={style.wrapMerchant2}>
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <Image source={require('../asset/icon/lokasimerah.png')} />
          <Text style={{ color: '#EA4335', fontWeight: 'bold', marginLeft: 10 }}>Lokasi Merchant</Text>
        </View>
        <Text>Alamat Lengkap Merchant</Text>
        <Text style={{ marginTop: 25 }}>Jl Anonim, Kota XX, Provinsi XX</Text>
        <Image
          style={{ position: 'absolute', marginLeft: 340, marginTop: 40 }}
          source={require('../asset/icon/mapsmerah.png')} />
      </TouchableOpacity>

      <View style={style.wrapMerchant3}>
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <Image source={require('../asset/icon/caution.png')} />
          <Text style={{ color: '#EA4335', fontWeight: 'bold', marginLeft: 10 }}>Detail</Text>
        </View>
        <View>
          <Text>Service yang ditawarkan</Text>
          <Text>Jam Operasional</Text>
          <Text>Deskripsi Singkat Mengenai Merchant</Text>
        </View>
      </View>

      <View>
        <TouchableOpacity style={style.katalog}
        onPress={() => navigation.navigate('KatalogMerchant')}
        >
          <Text style={style.txtKatalog}>Lihat Katalog</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  )
}

export default Merchant