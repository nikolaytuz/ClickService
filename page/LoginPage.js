import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import MaskInput, { Masks } from 'react-native-mask-input';
import { Entypo } from '@expo/vector-icons';

import {SafeAreaView, Keyboard, Image, Button, TextInput, Pressable, ImageBackground, StyleSheet, Text, View } from 'react-native';

import HeaderComponent from "../components/HeaderComponent"


export default function LoginPage({navigation}) {

  const [text, onChangeText] = useState('');
  const [focus, onSetFocus] = useState(false);
  const [phone, setPhone] = React.useState("");
  const [phoneUnMask, setPhoneUnMask] = React.useState("");


return (
    <View style={styles.container} >
      <StatusBar style="dark"></StatusBar>
      <HeaderComponent title="Добро пожаловать!" description={<Text>Еще нет аккаунта? <Text onPress={() => navigation.navigate('Register')} style={{textDecorationLine:"underline", color: "#6440FE", fontWeight: "600"}}>Регистрация</Text></Text>} stylesHeader={{}}></HeaderComponent>
      <View style={{padding:30}}>
        <Text style={{fontSize:10, color:"#76787E"}}>Введите номер</Text>
        <View style={{position:"relative"}}>
          <MaskInput selectionColor="#6440FE" onFocus={()=>{onSetFocus(true)}} onEndEditing={()=>{onSetFocus(false)}} keyboardType="numeric" style={{...styles.input, paddingLeft: 40, borderColor:(focus?"#6440FE":"rgba(7, 7, 7, 0.26)")}} value={phone} onChangeText={(masked, unmasked, obfuscated) => { setPhone(masked); setPhoneUnMask(unmasked); }}
          mask={['+','7', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, "-", /\d/, /\d/]} />
          <Entypo style={{position:"absolute", top: 9, left:9}} name="mobile" size={20} color="gray" />
        </View>
      </View>
      <View style={{...styles.obllogin}}>


        <View style={{marginTop: 30}}>
          <Pressable onPress={() => navigation.navigate('Shop')} disabled={phoneUnMask.length < 10} android_ripple={{color: 'black'}} style={{...styles.btn__primary, width: "100%",  marginHorizontal: "auto", backgroundColor: (phoneUnMask.length < 10?"grey":"#6440FE")}}>
            <Text style={{color: "white", width: "100%", textAlign: "center"}}>Отправить код</Text>
          </Pressable>
        </View>


        { (focus==false) &&
          <View style={{marginTop: 30}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{flex: 1, height: 2, backgroundColor: 'rgba(224, 224, 224, 1)'}} />
              <View>
                <Text style={{width: 180, textAlign: 'center'}}>Или войдите через</Text>
              </View>
              <View style={{flex: 1, height: 2, backgroundColor: 'rgba(224, 224, 224, 1)'}} />
            </View>
          </View>
          }

        { (focus==false) &&
          <View style={{marginTop: 30, marginBottom: 40, flex:1, alignItems: "center"}}>
            <Image resizeMode={"contain"}  style={styles.tinyLogo} source={require('../assets/image/VK_Full_Logo.png')} />
          </View>
        }



      </View>

    </View>
);

}


const styles = StyleSheet.create({
  tinyLogo:{
    marginHorizontal: "auto",
    width: 100,
    height: 20,
  },
  container: {
    height: "100%",
  },
  obllogin:{
    position: "absolute",
    bottom: 10,
    width: "100%",
    padding: 30,
  },
  input: {
    height: 40,
    // margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "rgba(7, 7, 7, 0.26)",
    borderRadius: 5,
  },
  btn__primary:{
    // height: 44,
    borderRadius: 5,
    paddingVertical: 14,
    backgroundColor: "#6440FE",
  }
});
