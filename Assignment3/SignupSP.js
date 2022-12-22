import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

function SignupSP({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.Container1}>
                <View style={{ alignContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.Title}>Fill this form to join as Service Provider !</Text>
                </View>
                <View style={styles.ApplicantInfomation}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', fontStyle: 'italic', color: 'BLACK', }}>Applicant Infomation</Text>
                    <View style={{ marginTop: 5, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <Text style={styles.subtitle} >Name          </Text>
                        <TextInput
                            style={styles.smalltextinput}
                            placeholder={'First Name '}>
                        </TextInput>
                        <TextInput
                            style={styles.smalltextinput}
                            placeholder={'Last Name '}>
                        </TextInput>
                    </View>

                    <View style={{ marginTop: 5, backgroundColor: 'white', width: '90%', height: 1 }}></View>
                    <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <Text style={styles.subtitle} >    Home Address</Text>
                        <TextInput
                            style={styles.textinput}
                            placeholder={'Enter your Home Address'}>
                        </TextInput>
                    </View>
                    <View style={{ marginTop: 5, backgroundColor: 'white', width: '90%', height: 1 }}></View>

                    <View style={{ marginTop: 8, flexDirection: 'row' }}>
                        <Text style={styles.subtitle} > City</Text>
                        <TextInput
                            style={styles.smalltextinput}
                            placeholder={'City Name'}>
                        </TextInput>
                        <Text style={styles.subtitle} >    Country</Text>
                        <TextInput
                            style={styles.smalltextinput}
                            placeholder={'Country Name'}>
                        </TextInput>
                    </View>
                    <View style={{ marginTop: 5, backgroundColor: 'white', width: '90%', height: 1 }}></View>
                    <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <Text style={styles.subtitle} >  Phone</Text>
                        <TextInput
                            style={styles.smalltextinput}
                            placeholder={'Phone Number'}>
                        </TextInput>
                        <Text style={styles.subtitle} >   Email</Text>
                        <TextInput
                            style={styles.smalltextinput}
                            placeholder={'Email Addrss'}>
                        </TextInput>
                    </View>
                </View>

                <View style={{ backgroundColor: 'white', width: '90%', height: 1 }}></View>
               
                <View style={styles.ApplicantInfomation}>
                    <Text style={{marginTop:65,fontSize: 18, fontWeight: 'bold', fontStyle: 'italic', color: 'BLACK', }}>Employment Information</Text>
                    <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <Text style={styles.subtitle} >Service Name       </Text>

                        <TextInput
                            style={styles.textinput}
                            placeholder={'Services name '}>
                        </TextInput>
                    </View>

                    <View style={{ marginTop: 5, backgroundColor: 'white', width: '90%', height: 1 }}></View>
                    <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <Text style={styles.subtitle} >Category                </Text>
                        <TextInput
                            style={styles.textinput}
                            placeholder={'Category Name'}>
                        </TextInput>
                    </View>
                    <View style={{ marginTop: 5, backgroundColor: 'white', width: '90%', height: 1 }}></View>

                    <View style={{ marginTop: 8, flexDirection: 'row' }}>
                        <Text style={styles.subtitle} >Per Hour                </Text>
                        <TextInput
                            style={styles.textinput}
                            placeholder={'Hourly Charges'}>
                        </TextInput>
                        <Text style={styles.subtitle} ></Text>
                        
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
                     onPress={()=>navigation.navigate("ServiceProviderApp")}>
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
        height: '40%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    Title: {
        marginTop: 30,
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

export default SignupSP;