import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

const Home = ({navigation}) => {
    return (
        <View>
            <View>
                <Text>Halo, Nur Said Amirudin</Text>
                <Image source={require('../asset/icon/notif.png')}
                style={style.icoNotif}/>

                <View style={style.searchWrap}>
                    <View>
                        <Image source={require('../asset/icon/maps.png')}/>
                    </View>
                    <TextInput placeholder='Telusuri di sini'></TextInput>
                    <View>
                        <TouchableOpacity>
                            <Image
                            source={require('../asset/icon/mic.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
            <View>
                <TouchableOpacity 
                style={style.linkMenu}
                onPress={() => navigation.navigate('MapsMenu')}>
                    <Image
                    source={require('../asset/icon/car.png')}/>
                </TouchableOpacity>
                <TouchableOpacity 
                style={style.linkMenu}
                onPress={() => navigation.navigate('MapsMenu')}>
                    <Image
                    source={require('../asset/icon/scooter.png')}/>
                </TouchableOpacity> 
                <TouchableOpacity 
                style={style.linkMenu}
                onPress={() => navigation.navigate('MapsMenu')}>
                    <Image
                    source={require('../asset/icon/rumahsakit.png')}/>
                </TouchableOpacity> 
                <TouchableOpacity 
                style={style.linkMenu}
                onPress={() => navigation.navigate('MapsMenu')}>
                    <Image
                    source={require('../asset/icon/spbu.png')}/>
                </TouchableOpacity> 
                <TouchableOpacity 
                style={style.linkMenu}
                onPress={() => navigation.navigate('MapsMenu')}>
                    <Image
                    source={require('../asset/icon/pertamini.png')}/>
                </TouchableOpacity>         
            </View>

            <View>
                <View style={style.newsWrap}>
                    <Text>Gambar Berita Terbaru</Text>
                    <Text>-seputar lalu lintas-</Text>
                </View>
                <View style={style.newsWrap}>
                    <Text>Gambar Berita Terbaru</Text>
                    <Text>-seputar lalu lintas-</Text>
                </View>
                <View style={style.newsWrap}>
                    <Text>Gambar Berita Terbaru</Text>
                    <Text>-seputar lalu lintas-</Text>
                </View>
                <View style={style.newsWrap}>
                    <Text>Gambar Berita Terbaru</Text>
                    <Text>-seputar lalu lintas-</Text>
                </View>
            </View>

            <View>
                <View>
                    <View style={style.bttmNav}></View>
                    <Text>Home</Text>
                </View>
                <View>
                    <View style={style.bttmNav}></View>
                    <Text>Maps</Text>
                </View>
                <View>
                    <View style={style.bttmNav}></View>
                    <Text>History</Text>
                </View>
                <View>
                    <View style={style.bttmNav}></View>
                    <Text>Profil</Text>
                </View>
            </View>
            
        </View>
    )
}

export default Home;

const style = StyleSheet.create({

})
