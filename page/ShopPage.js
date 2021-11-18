import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';

import {SafeAreaView, Keyboard, Image, ScrollView, TextInput, Pressable, ImageBackground, StyleSheet, Text, View } from 'react-native';

import HeaderShopComponent from "../components/HeaderShopComponent"
import BarComponent from "../components/BarComponent"
import SelectProfComponent from "../components/SelectProfComponent"
import SelectServiceComponent from "../components/SelectServiceComponent"
import SelectCalendarComponent from "../components/SelectCalendarComponent"


export default function ShopPage({navigation}) {
  const [select, setSelect] = useState(-1);
  const [step, setStep] = useState(1);

  const [profSelect, setProfSelect] = useState(null);
  const [serviceSelect, setServiceSelect] = useState(null);

function prevStep() {
  step > 1 ? setStep(step-1) : ""
}


return (
  <View style={{height: "100%", position: "relative"}}>
    <ScrollView style={{...styles.fonGrey}}>
        <StatusBar style="light"></StatusBar>
        <HeaderShopComponent title="На углях" adress="ул. Новоастраханская 3" description="парикмахерская" imgHeader={require("../assets/image/PreviewFon3.png")} stylesHeader={{color: "rgba(255, 255, 255, 0.8)"}}></HeaderShopComponent>
        <BarComponent></BarComponent>
        <View style={{height: 10}}></View>
        {step==1 &&
          <SelectProfComponent prevStep={prevStep} profSelect={profSelect} setProfSelect={setProfSelect} ></SelectProfComponent>
        }
        {step==2 &&
          <SelectServiceComponent prevStep={prevStep} serviceSelect={serviceSelect} setServiceSelect={setServiceSelect} ></SelectServiceComponent>
        }
        {step==3 &&
          <SelectCalendarComponent prevStep={prevStep} serviceSelect={serviceSelect} setServiceSelect={setServiceSelect} ></SelectCalendarComponent>
        }
    </ScrollView>

    {profSelect &&
      <View style={{position: "absolute", bottom: 20, left: 0, width: "100%", alignItems: "center", }}>
        <Pressable onPress={()=>{setStep(step+1)}} style={{...styles.button, ...styles.shadow}}><Feather name="check" size={30} color="white" /></Pressable>
      </View>
    }
  </View>
);

}


const styles = StyleSheet.create({
  fonGrey: {
    // height: "100%",
    backgroundColor: "#EBEBED",
  },
  button: {
    borderRadius: 10,
    padding: 15,
    // width: 80,
    // height: 80,
    backgroundColor: "black",
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: {
    	width: 0,
    	height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
});
