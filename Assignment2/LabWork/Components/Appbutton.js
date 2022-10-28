import React from 'react';
import { Text,StyleSheet,TouchableOpacity } from 'react-native';
import colors from './colors';

export default function Appbutton({title,onPress,color="green"}) {
  return (
    <TouchableOpacity style={[styles.button,{backgroundColor:colors[color]}]}
    onPress={onPress}>
      <Text style={styles.Title}>{title}</Text>
    </TouchableOpacity>
      );
}

const styles = StyleSheet.create({
  button:{
    backgroundColor:'green',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    padding:15,
    borderRadius:20,
    marginVertical:5
  },

  Title:{
    color:'Black',
    fontSize:20,
    fontWeight:"bold",
    textTransform:'uppercase',
  },
});
