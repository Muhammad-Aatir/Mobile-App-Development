import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

function Design({ navigation }) {
    return (
        <View style={styles.Container}>
            <View style={styles.Container1}>
                <Text style={styles.Title}>Quick Pick</Text>
                <Text style={styles.subtitle}>Welcome to the best Service Provider System</Text>
                <Image
                    style={{ marginTop: 60, width: 100, height: 100 }}
                    source={require('../assets/favicon.png')}></Image>
            </View>
            <View style={styles.Container2}>
                <TouchableOpacity style={styles.top} onPress={() => navigation.navigate("Service Provider")}>
                    <View style={styles.SProvider}>
                        <Text style={styles.Titlee}>Service Provider</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Customer")}>
                    <View style={styles.Customer}>
                        <Text style={styles.Titlee}>For Customer</Text>
                    </View>
                </TouchableOpacity>
                <Text style={{ alignItems: 'center', marginLeft: 90, marginTop: 57, color: 'black', fontWeight: 'bold' }}>Developed by Muhammad Aatir</Text>

            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'burlywood'
    },
    Container1: {
        width: '100%',
        height: '50%',
        backgroundColor: 'darksalmon',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        alignItems: 'center',
    },
    Container2: {
        width: '100%',
        height: '70%',
        backgroundColor: 'burlywood',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomWidth: 10,
        borderBottomColor: 'lightpink',

    },
    top: {
        marginTop: 50,
    },

    Title: {
        color: 'white',
        marginTop: 40,
        fontSize: 30,
        fontWeight: 'bold',

    },
    subtitle: {
        color: 'white',
        marginTop: 20,
        fontSize: 15,
        fontStyle: 'italic',
    },
    SProvider: {
        width: 159,
        height: 80,
        backgroundColor: 'navajowhite',
        borderWidth: 4,
        borderColor: 'darksalmon',
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25,
        padding: 18,
        alignItems: 'center',
        marginLeft: 63,
    },
    Customer: {
        width: 159,
        height: 80,
        backgroundColor: 'navajowhite',
        borderWidth: 4,
        borderColor: 'darksalmon',
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25,
        alignItems: 'center',
        padding: 18,
        marginTop: 15,
        marginLeft: 200
    },
    Titlee: {
        fontSize: 15,
        fontWeight: 'bold',
    }

});
export default Design;