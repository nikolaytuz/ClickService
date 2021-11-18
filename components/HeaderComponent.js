import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function HeaderComponent(props) {
  return (<View style={{...styles.container, ...props.stylesHeader, position: "relative"}}>
    <View style={{position: "absolute", bottom: 30, left: 20}}>
      <Text style={{color: props.stylesHeader.color?props.stylesHeader.color:"#000",fontWeight: "bold", fontSize: 25, }}> {props.title} </Text>
      <Text style={{color: props.stylesHeader.color?props.stylesHeader.color:"#000", marginTop:5, marginLeft: 4}}> {props.description} </Text>
    </View>
  </View>);

}


const styles = StyleSheet.create({
  container:{
    // flex: 1,
    // alignItems: "flex-end",
    paddingVertical: 30,
    paddingHorizontal: 20,
    height: 170,
  },
})
