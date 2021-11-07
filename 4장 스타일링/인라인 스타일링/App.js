import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View
    style={{
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <Text
      style={{
        padding: 10,
        fontSize: 26,
        fontWeight: '600',
        color: "black",
      }}>
       Inline Styleng - text</Text>
       <Text
       style={{
        padding: 10,
        fontSize: 26,
        fontWeight: '400',
        color: "red",
       }}>

       </Text>
    </View>
  );
}
