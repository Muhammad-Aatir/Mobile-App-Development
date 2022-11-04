import React from 'react';
import { StyleSheet, View } from 'react-native';
function Bottles(props) {
    return (
        <View>
             <View style={styles.RowContainer1}>
                <View style={styles.Button}></View>
                <View style={styles.Button}></View>
                </View>
                <View style={styles.RowContainer1}>
                    <View style={styles.Button}></View>
                     <View style={styles.Button}></View>
                </View>
        </View>
    );
}

export default Bottles;
const styles = StyleSheet.create({
    Button:{
        width:25,
        height:25,
        borderRadius:50,
        backgroundColor:'white',
        marginLeft:7,
        marginTop:8,
     
    },
    RowContainer1:{
        flexDirection:'row'
    },
});