import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstPage from "./page/FirstPage"
import LoginPage from "./page/LoginPage"
import RegisterPage from "./page/RegisterPage"
import ShopPage from "./page/ShopPage"
import ListShopsPage from "./page/ListShopsPage"


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen options={{ }} name="Shop" component={ShopPage} />
        <Stack.Screen options={{headerShown: false}} name="Preview" component={FirstPage} />
        <Stack.Screen options={{ }} name="Login" component={LoginPage} />
        <Stack.Screen options={{ }} name="Register" component={RegisterPage} />
        <Stack.Screen options={{ }} name="ListShops" component={ListShopsPage} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
