import React from 'react';
import { StyleSheet, View } from 'react-native';
import Bottles from './Bottles';
import MiddleBox from './MiddleBox';
function BigBoxes(props) {
    return (
        <View style={styles.fullDashboard}>
             <View style={styles.ColumnContainer1}>
                <View style={styles.GreenBox}>
                    <Bottles></Bottles>
                </View>
                <View style={styles.RowContainer1}>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.SmallgreenBox}></View>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.WhiteBox}></View>
                </View>

                <View style={styles.RowContainer1}>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.SmallgreenBox}></View>
                    <View style={styles.SmallgreenBox}></View>
                    <View style={styles.SmallgreenBox}></View>
                    <View style={styles.SmallgreenBox}></View>
                    <View style={styles.SmallgreenBox}></View>
                </View>
                
                <View style={styles.RowContainer1}>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.SmallRedBox}></View>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.WhiteBox}></View>
                </View>
                
                <View style={styles.RedBox}>
                    <Bottles></Bottles>
                </View>
            </View>

            <View style={styles.ColumnContainer2}>
                <View style={styles.ColumnDirection}>
                <View style={styles.WhiteBox}></View>
                <View style={styles.WhiteBox}></View>
                <View style={styles.SmallgreenBox}></View>
                <View style={styles.WhiteBox}></View>
                <View style={styles.WhiteBox}></View>
                <View style={styles.WhiteBox}></View> 
                <MiddleBox></MiddleBox>
                
                <View style={styles.RowContainer1}>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.SmallRedBox}></View>
                    <View style={styles.WhiteBox}></View>
                </View>
                
                <View style={styles.RowContainer1}>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.SmallRedBox}></View>
                    <View style={styles.WhiteBox}></View>
                </View>
                <View style={styles.RowContainer1}>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.SmallRedBox}></View>
                    <View style={styles.WhiteBox}></View>
                </View>
                <View style={styles.RowContainer1}>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.SmallRedBox}></View>
                    <View style={styles.SmallBlueBox}></View>
                </View>
                <View style={styles.RowContainer1}>
                    <View style={styles.SmallRedBox}></View>
                    <View style={styles.SmallRedBox}></View>
                    <View style={styles.WhiteBox}></View>
                </View>
                <View style={styles.RowContainer1}>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.WhiteBox}></View>
                </View>

                </View>
            </View>
            <View style={styles.ColumnContainer2}>
                <View style={styles.ColumnDirection}>
                <View style={styles.WhiteBox}></View>
                <View style={styles.SmallYellowBox}></View>
                <View style={styles.SmallYellowBox}></View>
                <View style={styles.SmallYellowBox}></View>
                <View style={styles.SmallYellowBox}></View>    
                <View style={styles.SmallYellowBox}></View>
    
                </View>
            </View>
            <View style={styles.ColumnContainer2}>
                <View style={styles.ColumnDirection}>
                <View style={styles.WhiteBox}></View>
                <View style={styles.SmallYellowBox}></View>
                <View style={styles.WhiteBox}></View>
                <View style={styles.WhiteBox}></View>
                <View style={styles.WhiteBox}></View>
                <View style={styles.WhiteBox}></View>
                </View>
            </View>
            
            <View style={styles.ColumnContainer1}>
                <View style={styles.YellowBox}>
                    <Bottles></Bottles>
                 </View>

                <View style={styles.RowContainer1}>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.SmallYellowBox}></View>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.WhiteBox}></View>
                </View>

                <View style={styles.RowContainer1}>
                     <View style={styles.SmallBlueBox}></View>
                     <View style={styles.SmallBlueBox}></View>
                     <View style={styles.SmallBlueBox}></View>
                     <View style={styles.SmallBlueBox}></View>
                     <View style={styles.SmallBlueBox}></View>
                     <View style={styles.WhiteBox}></View>
                </View>

                <View style={styles.RowContainer1}>
                    < View style={styles.WhiteBox}></View>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.WhiteBox}></View>
                    <View style={styles.SmallBlueBox}></View>
                    <View style={styles.WhiteBox}></View>
                </View>

                <View style={styles.BlueBox}>
                    <Bottles></Bottles>
                </View>
            </View>
        </View>
    );
}

export default BigBoxes;

const styles = StyleSheet.create({

    fullDashboard:{
        backgroundColor:'white', borderColor:'bisque',
        height:392,  width:386,
        borderWidth:20,borderRadius:15,
        flexDirection:'row',
    },

    ColumnContainer1:{
        height:140, width:140,
        flexDirection:'column'
    },

    ColumnContainer2:{
        height:23, width:23,
        flexDirection:'column'
    },
   
    RowContainer1:{
        flexDirection:'row'
    },

    ColumnDirection:{
        flexDirection:'column',
    },

    GreenBox:{
        backgroundColor:'green', borderColor:'forestgreen',
        height:140.9, width:140,
        borderWidth:20,
        padding:15,
        alignItems:'center',
    },

    YellowBox:{
        backgroundColor:'goldenrod',  borderColor:'gold',
        height:140, width:140,
        borderWidth:20,
        padding:15,
        alignItems:'center',
    },

    RedBox:{
        backgroundColor:'firebrick', borderColor:'red',
        height:142.9, width:140,
        borderWidth:20,
        padding:15,
        alignItems:'center',
    },

    BlueBox:{
        backgroundColor:'darkblue', borderColor:'blue',
        height:142.5, width:140,
        borderWidth:20,
        padding:15,
        alignItems:'center',
    },


    WhiteBox:{
        backgroundColor:'white', borderColor:'black',
        height:23,  width:23,
        borderWidth:1,
    },

    SmallRedBox:{
        backgroundColor:'red',  borderColor:'black',
        height:23,  width:23,
        borderWidth:1,
    },

    SmallgreenBox:{
        backgroundColor:'forestgreen', borderColor:'black',
        height:23, width:23,
        borderWidth:1,
    },

    SmallYellowBox:{
        backgroundColor:'gold', borderColor:'black',
        height:23, width:23,
        borderWidth:1,
    },

    SmallBlueBox:{
        backgroundColor:'blue', borderColor:'black',
        height:23, width:23,
        borderWidth:1,
    },

});