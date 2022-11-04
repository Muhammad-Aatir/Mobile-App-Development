import React from 'react';
import {StyleSheet, View} from 'react-native'; 


function MiddleBox(props) {
    return (
        <View>
            <View style={styles.MiddleBox}>
                <View style={styles.triangle}></View>
                <View style={styles.triangledown}></View>
                <View style={styles.triangleright}></View>  
           </View>
        </View>
    );
}

export default MiddleBox;

const styles = StyleSheet.create({
    MiddleBox:{
        borderColor:'black', backgroundColor:'white',
        height:78, width:75,
        borderWidth:1,
        marginLeft:-2
        
    },
    triangle: {
        width: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 35,
        borderRightWidth: 35,
        borderBottomWidth: 40,
        borderLeftColor: "blue",
        borderRightColor: "forestgreen",
        borderBottomColor: "gold",
        transform: [{ rotate: "180deg" }],
      },
      triangledown: {
        width: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 35,
        borderRightWidth: 35,
        borderBottomWidth: 40,
        borderLeftColor: "forestgreen",
        borderRightColor: "blue",
        borderBottomColor: "red",
        transform: [{ rotate: "0deg" }],
      },

    
     
});


