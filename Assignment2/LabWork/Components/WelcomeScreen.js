import React from 'react';
import { ImageBackground, StyleSheet, View,Image,Text} from 'react-native';
import Appbutton from './Appbutton';
import colors from './colors';
function WelcomeScreen(props) {
    return (
        <ImageBackground 
    
        style={styles.background}
        source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
              <Image style={styles.logo}
              source={require('../assets/Logo.png')}></Image>
                 <Text style={styles.Title}>We provide every Home Service on your Door step</Text>
                 </View>
            
              <View style={styles.buttonContainer}>
              <Appbutton title="Signin" color='color1' />
              <Appbutton title="Signup" color="color2"/>
      
              </View>
        
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    buttonContainer:{
        padding:30,
        width:'100%'

    },
    Title:{
        color:'Black',
        fontSize:12,
        fontWeight:"bold",
        textTransform:'uppercase',
      },

    logo:{
        height:100,
        width:100,
        borderRadius:30,
        alignItems:'center',
      
    },
    logoContainer:{
    
        top:-211,
        alignItems:'center',
    },
});

export default WelcomeScreen;