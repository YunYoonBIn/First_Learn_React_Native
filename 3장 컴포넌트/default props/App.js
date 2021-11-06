import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import MyButton from "./components/MyButton";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 30, marginBottom: 10 }}>props Btn</Text>

 

      <MyButton title="Button" />
      <MyButton>Children Props</MyButton>
      <MyButton/>
      
      <StatusBar style="auto" />
    </View>
    );
}
