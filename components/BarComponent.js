import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Feather   } from '@expo/vector-icons';

export default function BarComponent(props) {
  return (
    <View style={{...styles.container, ...styles.fonWhite, ...styles.shadow}}>
      <View style={{...styles.itemstyle}}>
        <Feather name="phone" size={22} color="black" />
        <Text style={{fontSize: 8 }}>Звонок</Text>
      </View>
      <View style={{...styles.itemstyle}}>
        <Feather name="map-pin" size={22} color="black" />
        <Text style={{fontSize: 8 }}>На карте</Text>
      </View>
      <View style={{...styles.itemstyle}}>
        <Feather name="share" size={22} color="black" />
        <Text style={{fontSize: 8 }}>Поделиться</Text>
      </View>
      <View></View>
  </View>);

}


const styles = StyleSheet.create({
  itemstyle: {
    paddingHorizontal: 12,
    alignItems: "center",

  },
  fonWhite: {
    backgroundColor: "#FFFFFF",
  },
  shadow: {
    shadowColor: "#C4C4C4",
    shadowOffset: {
    	width: 0,
    	height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 4,
  },
  container:{
    flexDirection: "row",
    // flex: 1,
    // alignItems: "flex-end",
    paddingVertical: 15,
    paddingHorizontal: 20,
    // height: 170,
  },
})
