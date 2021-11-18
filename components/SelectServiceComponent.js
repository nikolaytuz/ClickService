import React, {useState, useRef, useEffect } from 'react';
import {SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Feather   } from '@expo/vector-icons';



export default function SelectServiceComponent(props) {


  return (
  <View style={{...styles.container, ...styles.fonWhite, ...styles.shadow}}>
    <View style={{flexDirection: "row", paddingHorizontal: 10, marginBottom: 25, alignItems: "center", justifyContent: "space-between", }}>
      <Pressable onPress={props.prevStep} style={{}}>
        <Feather  name="chevron-left" size={20} color="black" />
      </Pressable>
      <Text style={{fontWeight: "700", fontSize: 18, color: "black",}}>Выберите услугу</Text>
    </View>

    <Pressable onPress={()=>{ props.serviceSelect != 1 ? props.setServiceSelect(1) : props.setServiceSelect(null)}} style={{...styles.service}}>
      <View style={{width: "70%",}}>
        <Text style={{fontSize: 18, fontWeight: "700"}}>Стрижка (муж)</Text>
        <Text style={{fontSize: 12, color: "#86858B"}}>45 минут</Text>
      </View>
      <View style={{width: "30%", alignSelf: "center", alignItems: "flex-end", }}>
        <View style={{...styles.button, backgroundColor: props.serviceSelect == 1 ? "#0080FF" : "white"}}>
          <Text style={{color: props.serviceSelect == 1 ? "white" : "black"}}>1200 р</Text>
        </View>
      </View>
    </Pressable>

    <Pressable onPress={()=>{ props.serviceSelect != 2 ? props.setServiceSelect(2) : props.setServiceSelect(null)}} style={{...styles.service}}>
      <View style={{width: "70%",}}>
        <Text style={{fontSize: 18, fontWeight: "700"}}>Стрижка (жен)</Text>
        <Text style={{fontSize: 12, color: "#86858B"}}>145 минут</Text>
      </View>
      <View style={{width: "30%", alignSelf: "center", alignItems: "flex-end", }}>
        <View style={{...styles.button, backgroundColor: props.serviceSelect == 2 ? "#0080FF" : "white"}}>
          <Text style={{color: props.serviceSelect == 2 ? "white" : "black"}}>14 $</Text>
        </View>
      </View>
    </Pressable>


  </View>);

}


const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#D2D1D6",
    borderRadius: 10,
    borderWidth: 1,
    maxWidth: 70,
    paddingVertical: 10,
    // height: 80,
    width: "100%",
  },
  service: {
    borderBottomColor: '#D2D1D6',
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 4,
    justifyContent: "center",
    flexDirection: "row",
    flex:1,
    width: "100%",
  },
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
    // height: "100%",
    // justifyContent: "space-between",
    // flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 15,
    paddingBottom: 200,
    paddingHorizontal: 15,
  },
})
