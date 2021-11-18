import React, {useState, useRef, useEffect } from 'react';
import {SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Feather   } from '@expo/vector-icons';


import ProffAnimComonent from "../componentsAnimate/ProffAnimComonent"

export default function SelectProfComponent(props) {
  const [active, setActive] = useState(-1);


  return (
  <View style={{...styles.container, ...styles.fonWhite, ...styles.shadow}}>
    <Text style={{fontWeight: "700", textAlign: "right", fontSize: 18, width: "100%", marginBottom: 15, color: "black",}}>Выберите специалиста</Text>
      <ProffAnimComonent active={props.profSelect==1} setActive={props.setProfSelect} index={1}></ProffAnimComonent>
      <ProffAnimComonent active={props.profSelect==2} setActive={props.setProfSelect} index={2}></ProffAnimComonent>
  </View>);

}


const styles = StyleSheet.create({

  fonWhite: {
    backgroundColor: "#FFFFFF",
  },
  shadow: {
    shadowColor: "#E5E5E5",
    shadowOffset: {
    	width: 0,
    	height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  container:{
    // flex: 1,
    height: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 15,
    paddingBottom: 200,
    paddingHorizontal: 20,
  },
})
