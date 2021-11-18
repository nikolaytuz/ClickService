import React, {useState, useRef, useEffect } from 'react';
import { StyleSheet, Easing, Text, View, Animated, Pressable } from 'react-native';



export default function ProffAnimComonent(props) {

  const setIsOpen = ()=>{
    props.setActive(props.index)
  }

  useEffect( () => {
    onPress(!props.active)
    }, [props.active])


  const { width, height, opacity, fonColor, nameColor, onPress } = useAnimateItemStyle(props.active, setIsOpen)

  return (
    <Pressable onPress={()=>{setIsOpen()}}  style={{...styles.item}}>
      <Animated.View style={{...styles.fonButton, width, opacity: opacity, height }}></Animated.View>
      <View style={{...styles.itemCont}}>
        <Animated.View style={{...styles.cuad, backgroundColor: fonColor}}>
          <Text style={{fontWeight: "700", fontSize: 25, borderRadius: 10,  textAlign: "center", color: "white", }}>Н</Text>
        </Animated.View>
        <Animated.Text style={{fontWeight: "700", fontSize: 18, textAlign: "center", color: nameColor}}>Николай С.</Animated.Text>
        <Text style={{fontWeight: "500", fontSize: 12, textAlign: "center", color: "#D2D1D6",}}>Доступен завтра</Text>
      </View>
    </Pressable>
)}


const useAnimateItemStyle = () => {
  // const [isOpen, setIsOpen] = useState(false)

  const animate_state = {
    start: 0,
    end: 1
  }
  const value = useRef(new Animated.Value(animate_state.start)).current

  const onPress = (isOpen) => {
    Animated.timing(value, { toValue: isOpen ? animate_state.start : animate_state.end, useNativeDriver: false, duration: isOpen ? 0 : 200, easing: Easing.easing }).start()
    // setIsOpen(!isOpen)
  }

  const inputRange = Object.values(animate_state)
  const width = value.interpolate({ inputRange, outputRange: ["0%", "100%"] })
  const height = value.interpolate({ inputRange:[0,1], outputRange: ['0%', '100%'] })
  const nameColor = value.interpolate({ inputRange, outputRange: ['#000000', '#ffffff'] })
  const fonColor = value.interpolate({ inputRange, outputRange: ['#D2D1D6', '#000000'] })
  const opacity = value.interpolate({ inputRange, outputRange: [0, 1] })

  return { width, height, opacity, fonColor, nameColor, onPress }
}


const styles = StyleSheet.create({
  fonButton: {
    backgroundColor : "black",
    borderRadius: 10,
    position: "absolute",
    // bottom: "50%",
  },
  cuad : {
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    width: 80,
  },
  itemCont:{
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  itemRod: {

  },
  item: {
    borderColor: "#D2D1D6",
    borderRadius: 10,
    borderWidth: 1,
    width: "48%",
    marginBottom: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  fonWhite: {
    backgroundColor: "#FFFFFF",
  },
})
