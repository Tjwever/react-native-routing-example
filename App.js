import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native-web'
import { ActivityIndicator } from 'react-native-web'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './src/screens/HomeScreen'
import UsersScreen from './src/screens/UsersScreen'
import DetailsScreen from './src/screens/DetailsScreen'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

export default function App() {
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Users' component={UsersScreen} />
                <Stack.Screen name='Details' component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
