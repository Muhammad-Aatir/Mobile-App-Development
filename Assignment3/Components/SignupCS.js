import React from 'react';
import { View, StyleSheet,TextInput,ScrollView,TouchableOpacity,Text } from 'react-native';

function SignupCS({navigation}) {
    return (
        <ScrollView>
            <View style={styles.Container1}>
                <View style={{ alignContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.Title}>Fill this form to join as Customer !</Text>
                </View>
                <View style={styles.ApplicantInfomation}>
                    <View style={{ marginTop: 150, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <Text style={styles.subtitle} >Name                   </Text>
                        <TextInput
                            style={styles.textinput}
                            placeholder={'Enter Your full Name '}>
                        </TextInput>
                       
                    </View>

                    <View style={{ marginTop: 5, backgroundColor: 'white', width: '90%', height: 1 }}></View>
                    <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <Text style={styles.subtitle} >Home Address    </Text>
                        <TextInput
                            style={styles.textinput}
                            placeholder={'Enter your Home Address'}>
                        </TextInput>
                    </View>
                    <View style={{ marginTop: 5, backgroundColor: 'white', width: '90%', height: 1 }}></View>
                    <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <Text style={styles.subtitle} >Email Address    </Text>
                        <TextInput
                            style={styles.textinput}
                            placeholder={'Enter your Email Address'}>
                        </TextInput>
                    </View>
                    <View style={{ marginTop: 5, backgroundColor: 'white', width: '90%', height: 1 }}></View>
                    <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <Text style={styles.subtitle} >Phone Number    </Text>
                        <TextInput
                            style={styles.textinput}
                            placeholder={'Enter your Phone Number'}>
                        </TextInput>
                    </View>
                    <View style={{ marginTop: 5, backgroundColor: 'white', width: '90%', height: 1 }}></View>
                    <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <Text style={styles.subtitle} >Password              </Text>

                        <TextInput
                            style={styles.textinput}
                            placeholder={'Enter Password '}>
                        </TextInput>
                    </View>
                    <View style={{ marginTop: 5, backgroundColor: 'white', width: '90%', height: 1 }}></View>
                    
                    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <Text style={styles.subtitle} >Confirm Password</Text>

                        <TextInput
                            style={styles.textinput}
                            placeholder={'Confirm Password'}>
                        </TextInput>
                    </View>
    
                </View>

                
                    <TouchableOpacity style={{justifyContent:'flex-end'}}
                     onPress={() => navigation.navigate("CustomerApp")}
                    >
                    <View style={{ marginTop:29,marginBottom:31,alignItems: 'center', padding: 5, borderRadius: 25, borderWidth: 4, borderColor: 'b', width: 100, height: 35, backgroundColor: 'white' }}>
                        <Text>Submit</Text>
                    </View>
                </TouchableOpacity>
                </View>
             
         
        </ScrollView>

    );
}
const styles = StyleSheet.create({
    Container1: {
        width: '100%',
        height: '100%',
        backgroundColor: 'darksalmon',
        alignItems: 'center',

    },
    ApplicantInfomation: {
     
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    Title: {
        marginTop: 130,
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'navajowhite',

    },
    subtitle: {

        fontSize: 16,
        fontStyle: 'italic',
        color: 'black',
        fontWeight: 'bold',
    },
    textinput: {
        borderWidth: 3,
        padding: 6,
        marginLeft: 25,
        borderColor: 'black',
        borderRadius: 8,
        height: 30,
        width: '45%',
        backgroundColor: 'navajowhite',
    },
    smalltextinput: {
        borderWidth: 3,
        padding: 6,
        marginLeft: 10,
        borderColor: 'black',
        borderRadius: 8,
        height: 30,
        width: '28%',
        backgroundColor: 'navajowhite',
    },

});

export default SignupCS;