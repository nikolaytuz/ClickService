import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Carousel from 'react-native-looped-carousel';

import {SafeAreaView, Dimensions, Pressable, ImageBackground, StyleSheet, Text, View } from 'react-native';


const { width, height } = Dimensions.get('window');

export default function MainComponent({navigation}) {

  const [size, setSize] = useState({ width: width, height: height });
  const [count, setCount] = useState(0);

  const [arrImg, setArrImg] = useState([require("../assets/image/PreviewFon1.png" ), require("../assets/image/PreviewFon2.png" ), require("../assets/image/PreviewFon3.png" )]);

  const _onLayoutDidChange = e => {
    const layout = e.nativeEvent.layout;
    setSize({width: layout.width, height: layout.height})
  };

  const _onAnimateNextPage = p => {

  }

return (
    <View style={styles.container} onLayout={_onLayoutDidChange}>
    <Carousel
      delay={4000}
      style={size}
      autoplay
      bullets={true}
      bulletsContainerStyle={{bottom: 120}}
      bulletStyle={{backgroundColor: "#959395", borderWidth: 0, marginHorizontal: 3, height: 7, width: 7}}
      chosenBulletStyle={{marginHorizontal: 3, height: 7, width: 7}}
      currentPage={0}
      onAnimateNextPage={_onAnimateNextPage}>
      <ImageBackground style={{...styles.w100,}} source={require("../assets/image/PreviewFon1.png" )} resizeMode="cover" style={styles.image}>
        <View style={{...styles.obertka}}>
        <View style={styles.previewview}>
         <Text style={{...styles.white, ...{fontSize: 25, width: 300, paddingHorizontal: 20, marginBottom: 110}}}>Новое приложение в котором вы можете заказать услги в один клик.</Text>
         </View>
        </View>
      </ImageBackground>
      <ImageBackground style={{...styles.w100,}} source={require("../assets/image/PreviewFon2.png" )} resizeMode="cover" style={styles.image}>
        <View style={{...styles.obertka}}>
        <View style={styles.previewview}>
         <Text style={{...styles.white, ...{fontSize: 25, width: 300, paddingHorizontal: 20, marginBottom: 110}}}>Запишитесь на стрижку, маникюр, окрашивание через одно приложение.</Text>
         </View>
        </View>
      </ImageBackground>
      <ImageBackground style={{...styles.w100,}} source={require("../assets/image/PreviewFon3.png" )} resizeMode="cover" style={styles.image}>
        <View style={{...styles.obertka}}>
        <View style={styles.previewview}>
         <Text style={{...styles.white, ...{fontSize: 25, width: 300, paddingHorizontal: 20, marginBottom: 110}}}>Скоро все организации вашего города.</Text>
         </View>
        </View>
      </ImageBackground>

    </Carousel>




       <StatusBar style="light"></StatusBar>
        <View style={styles.previewview}>

         <View style={{flex: 1, padding: 10, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around"}}>
           <Pressable onPress={() => navigation.navigate('Login')} style={{...styles.btn__outline, marginHorizontal: "auto", width: "45%"}}>
             <Text style={{...styles.white, ...{textAlign: "center"}}}>Войти</Text>
           </Pressable>
           <Pressable onPress={() => navigation.navigate('Register')} style={{...styles.btn__primary, width: "45%", marginHorizontal: "auto"}}>
             <Text style={{color: "#668EF6", fontWeight:"bold", width: "100%", textAlign: "center"}}>Регистрация</Text>
           </Pressable>
         </View>
       </View>
    </View>
);

}


const styles = StyleSheet.create({
  container: {
    color: "white",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
      alignSelf: 'stretch',
      flex: 1,
    },
  white: {
    color: "white",
  },
  w100: {
    width: "100%",
  },
  pt20: {
    padding: 20,
  },
  previewview: {
    width: "100%",
    position: 'absolute', //Here is the trick
    bottom: 50, //Here is the trick
  },
  btn__outline: {
    padding: 10,
    borderColor: "white",
    borderRadius: 5,
    alignSelf: 'center',
    borderWidth: 1,
    borderStyle: "solid",
  },
  btn__primary: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  marelft10: {
    marginLeft: 20,
  },
  obertka:{
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.51)",
  }
});
