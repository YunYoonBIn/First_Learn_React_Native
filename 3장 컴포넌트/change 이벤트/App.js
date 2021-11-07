import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import EventButton from "./components/EventButton";
import EventInput from "./components/TextInput";

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
      <Text style={{ fontSize: 30, marginBottom: 10 }}>_onChange</Text>

    <EventInput></EventInput>    

    </View>
  );
}
