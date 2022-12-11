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
        alignSelf: 'center'
    },
    txtWrap: {
        marginTop: 20,
        margin: 20,
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
        borderRadius: 10
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
        borderRadius: 10
    },
    txtSimpan: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

const Profil = () => {
    return (
        <View>
            <View style={style.topText}>
                <Text style={style.txtTop}>Profil</Text>
            </View>

            <View>
                <Image style={style.profilImg}/>
            </View>

            <View style={style.txtWrap}>
                    <View style={style.flxText}>
                        <Text style={style.txtHis}>Nama</Text>
                        <Text style={style.txtHis2}>: Pengguna atau User</Text>
                    </View>
                    <View style={style.flxText}>
                        <Text style={style.txtHis}>Email</Text>
                        <Text style={style.txtHis2}>: Useremail123@gmail.com</Text>
                    </View>
                    <View style={style.flxText}>
                        <Text style={style.txtHis}>Telephone</Text>
                        <Text style={style.txtHis2}>: 085123245556</Text>
                    </View>
                    <View style={style.flxText}>
                        <Text style={style.txtHis}>Alamat</Text>
                        <Text style={style.txtHis2}>: Tempat dan Alamat Pengguna</Text>
                    </View>
                </View>
                <TouchableOpacity style={style.edit}>
                    <Text style={style.txtEdit}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.simpan}>
                    <Text style={style.txtSimpan}>Simpan</Text>
                </TouchableOpacity>
                
        </View>
    )
}

export default Profil;