import React from 'react';
import { useState } from 'react';
import { Text, StyleSheet, View,TextInput,TouchableOpacity,Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function ProfileScreen() {
    return (
        <View style={{ backgroundColor: 'khaki', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
 <Text>Profile Screen</Text>
       </View>
    );
}

function HomeScreen() {
  
    return (
        <View style={{ backgroundColor: 'skyblue', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Home screen</Text>      
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ backgroundColor: 'yellow', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings screen</Text>
        </View>
    );
}

function BookingScreen() {
  
    return (
        <View style={{ backgroundColor: 'burlywood', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Bookings</Text>      
        </View>
    );
}
const Tab = createBottomTabNavigator();


function CustomerApp(props) {
    return (
     
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
                <Tab.Screen name="Bookings" component={BookingScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
      

    );
}
const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'dodgerblue'
    },
});


export default CustomerApp;