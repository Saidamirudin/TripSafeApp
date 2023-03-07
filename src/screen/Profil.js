import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


const style = StyleSheet.create({
    topText: {
        backgroundColor: '#00AA13',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtTop: {
        color: 'white',
        fontSize: 19,
        fontWeight: 'bold'
    },  
    profilImg: {
        width: 100,
        height: 100,
        borderRadius: 100/2,
        backgroundColor: '#D8D4D4',
        marginTop: 70,
        alignSelf: 'center',
        elevation: 3
    },
    txtWrap: {
        marginTop: 20,
        margin: 20,
        flexDirection: 'row'
    },
    flxText: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtHis: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    }, 
    txtHis2: {
        fontSize: 16
    },
    edit: {
        width: 370,
        height: 50,
        margin: 20,
        backgroundColor: '#FBBC04',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 3
    },
    txtEdit: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    simpan: {
        width: 370,
        height: 50,
        marginHorizontal: 20,
        backgroundColor: '#00AA13',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 3
    },
    txtSimpan: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    logout: {
        width: 370,
        height: 50,
        marginHorizontal: 20,
        marginVertical: 20,
        backgroundColor: '#EA4335',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 3
    },
    txtLogout: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

const Profil = () => {

    let namaUser = "Nur Said Amirudin";
    let emailUser = "Saidammir80@gmail.com";
    let noTelp = "085123456789";
    let alamat = "Yogyakarta, Indonesia";

    return (
        <View>
            <View style={style.topText}>
                <Text style={style.txtTop}>Profil</Text>
            </View>

            <View>
                <Image 
                source={require('../asset/image/giyu.jpg')}
                style={style.profilImg}/>
            </View>

            <View style={style.txtWrap}>
                    <View style={{
                        marginRight: 20
                    }}>
                        <Text style={style.txtHis}>Nama</Text>
                        <Text style={style.txtHis}>Email</Text>
                        <Text style={style.txtHis}>Telephone</Text>
                        <Text style={style.txtHis}>Alamat</Text>
                    </View>
                    <View>
                        <Text style={style.txtHis2}>: {namaUser}</Text>
                        <Text style={style.txtHis2}>: {emailUser}</Text>
                        <Text style={style.txtHis2}>: {noTelp}</Text>
                        <Text style={style.txtHis2}>: {alamat}</Text>
                    </View>
                </View>
                <TouchableOpacity style={style.edit}>
                    <Text style={style.txtEdit}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.simpan}>
                    <Text style={style.txtSimpan}>Simpan</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.logout}>
                    <Text style={style.txtLogout}>Keluar</Text>
                </TouchableOpacity>
                
        </View>
    )
}

export default Profil;