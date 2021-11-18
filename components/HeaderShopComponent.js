import React, {useState} from 'react';
import {ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function HeaderShopComponent(props) {
  return (
    <ImageBackground style={{...styles.w100,}} source={props.imgHeader} resizeMode="cover" style={{...styles.container, ...props.stylesHeader, position: "relative"}}>
      <View style={{...styles.obertka}}>
        <View style={{position: "absolute", bottom: 30, left: 20}}>
          <Text style={{color: props.stylesHeader.color?props.stylesHeader.color:"#000", textTransform: "uppercase", fontSize: 10, marginLeft: 5}}> {props.description} </Text>
          <Text style={{color: props.stylesHeader.color?props.stylesHeader.color:"#000", marginTop:-5, fontWeight: "700", fontSize: 30, }}> {props.title} </Text>
          <Text style={{color: props.stylesHeader.color?props.stylesHeader.color:"#000",  fontSize: 14, marginLeft: 5}}> {props.adress} </Text>
        </View>
      </View>
    </ImageBackground>
  );

}


const styles = StyleSheet.create({
  container:{
    // flex: 1,
    // alignItems: "flex-end",

    height: 280,
  },
  obertka:{
    paddingVertical: 30,
    paddingHorizontal: 20,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  }
})
