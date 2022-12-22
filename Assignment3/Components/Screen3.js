import React from 'react';
import { Image, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

function Screen3({navigation}) {
    return (
        <View>
        <View style={styles.Container1}>
           
            <Image style={styles.image}
                source={require('../assets/Customer2.jpeg')}>
            </Image>
            <Text style={styles.Title}>Customer Side</Text>
        </View>
        <View style={styles.Container2}>

        <TouchableOpacity 
              onPress={() => navigation.navigate("Login")} style={styles.Choice}>
            <Text>Login</Text></TouchableOpacity>

        <TouchableOpacity

        onPress={() => navigation.navigate("CustomerSignup")}
        style={styles.Choice}>
            <Text>Signup</Text>
        </TouchableOpacity>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    Container1: {
        width: '100%',
        height: '65%',
        backgroundColor: 'darksalmon',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Container2: {
        marginTop:30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        borderWidth: 8,
        borderColor: 'burlywood',
        width: 300,
        height: 250,
        borderTopLeftRadius: 60,
        borderBottomStartRadius: 20,
        borderTopRightRadius: 60,
        borderBottomEndRadius: 20,
    },
    Title: {
        color: 'white',
        marginTop: 55,
        fontSize: 20,
        fontWeight: 'bold',
    },
    Choice: {
        borderWidth: 3,
        padding:10,
        marginTop:25,
        borderColor:'darksalmon',
        borderRadius:25,
        alignItems:'center',
        height:45,
        width:'50%',
        backgroundColor: 'navajowhite',
    
    },
});
export default Screen3;