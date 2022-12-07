
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeItem from './itemscreen/HomeItem';
import MapsItem from './itemscreen/MapsItem';
import HistoryItem from './itemscreen/HistoryItem';
import ProfilItem from './itemscreen/ProfilItem';

const Tab = createBottomTabNavigator();

const MainContainer = () => (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeItem} />
            <Tab.Screen name="Maps" component={MapsItem} />
            <Tab.Screen name="History" component={HistoryItem} />
            <Tab.Screen name="Profil" component={ProfilItem} />
        </Tab.Navigator>
    </NavigationContainer>
)

export default MainContainer;