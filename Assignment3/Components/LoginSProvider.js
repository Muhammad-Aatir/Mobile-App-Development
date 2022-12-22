import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text, TextInput } from 'react-native';
function LoginSProvider({ navigation }) {
    return (
        <View>
            <View style={styles.Container1}>
                <Image
                    style={styles.image}
                    source={require('../assets/LoginSP.jpg')}
                ></Image>
            </View>
            <View style={styles.Container2}>
                <TextInput
                    style={styles.textinput}
                    placeholder={'Enter your Email'}>
                </TextInput>

                <TextInput
                    style={styles.textinput}
                    placeholder={'Enter your password'}>
                </TextInput>

                <TouchableOpacity onPress={()=>navigation.navigate("CustomerApp")}> 
                    <View style={{ alignItems: 'center', padding: 5, marginTop: 15, borderRadius: 25, borderWidth: 4, borderColor: 'burlywood', width: 100, height: 40, backgroundColor: 'darksalmon' }}>
                        <Text>Submit</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    Container1: {
        width: '100%',
        height: '60%',
        backgroundColor: 'darksalmon',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 350,
        height: 250,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        borderColor: 'burlywood',
        borderWidth: 8,
    },
    Container2: {
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textinput: {
        borderWidth: 3,
        padding: 10,
        marginTop: 25,
        borderColor: 'darksalmon',
        borderRadius: 25,
        alignItems: 'center',
        height: 45,
        width: '50%',
        backgroundColor: 'navajowhite',
    },
});
export default LoginSProvider;