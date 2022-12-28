import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import firebase from '../database/firebase';

export default class Register extends Component {

    constructor() {
        super();r
        this.state = {
            displayName: '',
            noTelphone: '',
            email: '',
            password: '',
            rptPassword: ''
        }
    }

    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    registerUser = () => {
        if (this.state.email === '' && this.state.password === '') {
            Alert.alert('Enter details to signup!')
        } else {
            this.setState({
                isLoading: true,
            })
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then((res) => {
                    res.user.updateProfile({
                        displayName: this.state.displayName
                    })
                    console.log('User registered successfully!')
                    this.setState({
                        isLoading: false,
                        displayName: '',
                        noTelphone: '',
                        email: '',
                        password: '',
                        rptPassword: ''
                    })
                    this.props.navigation.navigate('Login')
                })
                .catch(error => this.setState({ errorMessage: error.message }))
        }
    }


    render() {
        if (this.state.isLoading) {
            return (
                <View style={style.preloader}>
                    <ActivityIndicator size="large" color="#9E9E9E" />
                </View>
            )
        }

        return (
            <View>
                <View style={style.WrapperRegister}>
                    <Text style={style.TxtRegis}>Selamat Datang</Text>
                    <Text style={style.TxtRegis2}>Silahkan Buat Akun Anda</Text>
                </View>

                <View style={style.WrapperInput}>

                    <View style={style.Flex}>
                        <View style={style.FlexIcon}>
                            <Image
                                source={require('../asset/icon/user.png')}
                                style={style.icoAdd} />
                        </View>

                        <TextInput
                            placeholder="Nama"
                            style={style.textInput}
                            value={this.state.displayName}
                            onChangeText={(val) => this.updateInputVal(val, 'displayName')}
                        />
                    </View>

                    <View style={style.Flex}>
                        <View style={style.FlexIcon}>
                            <Image
                                source={require('../asset/icon/telephone.png')}
                                style={style.icoAdd}
                            />
                        </View>

                        <TextInput
                            placeholder="No Telphone"
                            style={style.textInput}
                            value={this.state.noTelphone}
                            onChangeText={(val) => this.updateInputVal(val, 'noTelphone')}
                        />
                    </View>

                    <View style={style.Flex}>
                        <View style={style.FlexIcon}>
                            <Image
                                source={require('../asset/icon/@add.png')}
                                style={style.icoAdd} />
                        </View>

                        <TextInput
                            placeholder="Email"
                            style={style.textInput}
                            value={this.state.email}
                            onChangeText={(val) => this.updateInputVal(val, 'email')}
                        />
                    </View>

                    <View style={style.Flex}>
                        <View style={style.FlexIcon}>
                            <Image
                                source={require('../asset/icon/lock.png')}
                                style={style.icoLock} />
                        </View>
                        <TextInput
                            placeholder="Password"
                            style={style.textInput}
                            secureTextEntry
                            value={this.state.password}
                            onChangeText={(val) => this.updateInputVal(val, 'password')}
                        />
                    </View>
                    <View style={style.Flex}>
                        <View style={style.FlexIcon}>
                            <Image
                                source={require('../asset/icon/lock.png')}
                                style={style.icoLock} />
                        </View>
                        <TextInput
                            placeholder="Masukan Ulang Password"
                            style={style.textInput}
                            secureTextEntry
                            value={this.state.rptPassword}
                            onChangeText={(val) => this.updateInputVal(val, 'rptPassword')}
                        />
                    </View>

                </View>

                <TouchableOpacity
                    onPress={() => this.registerUser()}
                >
                    <View style={style.viewButton}
                    >
                        <Text style={style.textLogin}>Daftar</Text>
                    </View>
                </TouchableOpacity>

                <Text style={style.TxtBtm}>Daftar Dengan</Text>

                <TouchableOpacity>
                    <Image
                        style={style.google}
                        source={require('../asset/icon/google.png')} />
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
                    <Text style={{ fontSize: 15, fontWeight: '500' }}>Sudah Memiliki Akun?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={{ color: "#00AA13", fontSize: 15, fontWeight: 'bold', marginLeft: 10 }}>Masuk</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}



const style = StyleSheet.create({
    Flex: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    FlexIcon: {
        alignSelf: 'center',
        borderWidth: 1,
        borderRightWidth: 0,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderColor: '#00AA13',
        height: 60,
        paddingVertical: 5,
        flexDirection: 'row'
    },
    icoAdd: {
        width: 28,
        height: 28,
        maxWidth: 40,
        maxHeight: 40,
        marginRight: 10,
        marginLeft: 10,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    icoLock: {
        width: 28,
        height: 38,
        maxWidth: 40,
        maxHeight: 40,
        marginRight: 10,
        marginLeft: 10,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    textInput: {
        width: 318,
        height: 60,
        borderColor: '#00AA13',
        alignSelf: 'center',
        marginVertical: 2.33,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        fontSize: 18
    },
    logo: {
        alignSelf: 'center',
        marginTop: 120
    },
    WrapperRegister: {
        alignItems: 'center',
        marginVertical: 25
    },
    TxtRegis: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#00AA13',
    },
    TxtRegis2: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#0FDC26'
    },
    WrapperInput: {
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 15,
    },
    viewButton: {
        width: 370,
        height: 60,
        alignItems: 'center',
        backgroundColor: '#00AA13',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        elevation: 3
    },
    textLogin: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    TxtBtm: {
        textAlign: 'center',
        marginTop: 20,
        color: '#1E1E1E'
    },
    google: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alignSelf: 'center',
        marginTop: 20
    },
    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }

})