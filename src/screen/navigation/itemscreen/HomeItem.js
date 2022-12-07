import React from 'react'
import { View, Text } from 'react-native'

const HomeItem = ({navigation}) => {
    return (
        <View style={{
            flex: 1, 
            alignItems: 'center', 
            justifyContent:'center'}}>

            <Text
            onPress={() => navigation.navigate('Home')}
            style={{fontSize: 26, fontWeight: 'bold'}}
            >Menu Screen</Text>
        </View>
    )
}

export default HomeItem;