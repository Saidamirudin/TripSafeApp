import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Image } from 'react-native'
// import { launchImageLibrary } from 'react-native-image-picker';

// const SERVER_URL = 'http://localhost:3000';

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#60D669',
        margin: 10,
        borderRadius: 15,
    },
    wrapInput: {
        marginBottom: 10
    },
    txtInput: {
        fontSize: 18,
        fontWeight: '600',
        color: '#00AA13',
        marginBottom: 10
    },
    inputText: {
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#00AA13',
        fontSize: 17,
        paddingLeft: 20
    },
    txtDeskrip: {
        textAlign: 'center',
        maxWidth: 200,
        alignSelf: 'center',
        color: '#fff'
    },
    btnUpload: {
        backgroundColor: '#fff',
        width: 370,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#00AA13'
    },
    txtUpload: {
        color: '#9B9B9A'
    },
    buttonBTM: {
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
    txtButtonBTM: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },

})

const createFormData = (photo, body = {}) => {
    const data = new FormData();

    data.append('photo', {
        name: photo.fileName,
        type: photo.type,
        uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
    });

    Object.keys(body).forEach((key) => {
        data.append(key, body[key]);
    });

    return data;
};


const UploadImage = () => {

    const [photo, setPhoto] = React.useState(null);

    const handleChoosePhoto = () => {
        launchImageLibrary({ noData: true }, (response) => {
            // console.log(response);
            if (response) {
                setPhoto(response);
            }
        });
    };

    const handleUploadPhoto = () => {
        fetch(`${SERVER_URL}/api/upload`, {
            method: 'POST',
            body: createFormData(photo, { userId: '123' }),
        })
            .then((response) => response.json())
            .then((response) => {
                console.log('response', response);
            })
            .catch((error) => {
                console.log('error', error);
            });
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {photo && (
                <>
                    <Image
                        source={{ uri: photo.uri }}
                        style={{ width: 300, height: 300 }}
                    />
                    <Button title="Upload Photo"
                        // onPress={handleUrploadPhoto}
                    />
                </>
            )}
            {/* <Button styles={styles.btnUpload} title="Unggah Bukti Pembayaran"
            // onPress={handleChoosePhoto} 
            /> */}
            <TouchableOpacity
                style={styles.btnUpload}>
                <Image source={require('../asset/icon/upload.png')} />
                <Text style={styles.txtUpload}>Unggah Bukti Pembayaran</Text>
            </TouchableOpacity>
        </View>
    )
}

const VerifikasiPembayaran = ({navigation}) => {
    const [date, setDate] = useState('09-10-2020');
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.wrapInput}>
                    <Text style={styles.txtInput}>Kode Pembayaran</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder='A234FFFF' />
                </View>
                <View style={styles.wrapInput}>
                    <Text style={styles.txtInput}>Bank Tujuan</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder='BANK BRI : 12324546' />
                </View>
                <View style={styles.wrapInput}>
                    <Text style={styles.txtInput}>Informasi Pembayaran </Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder='Nama Pemilik Rekening / Sumber Dana'
                    />
                </View>
                <View style={styles.wrapInput}>
                    <Text style={styles.txtInput}>Tanggal Pembayaran</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder='DD / MM / YY' />
                </View>
                <View style={styles.wrapInput}>
                    <Text style={styles.txtInput}>Bukti Pembayaran</Text>
                    <UploadImage />
                </View>
                <Text style={styles.txtDeskrip}>
                    Konfirmasi Akan Dikirim Melalui
                    Whatsapp Chat
                </Text>
            </View>

            <View style={{ backgroundColor: '#fff', marginTop: 10 }}>
                <TouchableOpacity style={styles.buttonBTM}
                    onPress={() => navigation.navigate('Keranjang')}
                >
                    <Text style={styles.txtButtonBTM}>Kirim</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default VerifikasiPembayaran