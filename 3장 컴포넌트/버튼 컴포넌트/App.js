import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={{
      flex:1,
      backgroundColor:"#fff",
      alignItems:"center",
      justifyContent:"center",
    }}>
      <Text style={{ fontSize:30, marginBottom:10}}>버튼</Text>
      <Button title="Button" onPress={()=>{alert("클릭")}}>버튼</Button>
      <StatusBar style="auto" />
    </View>
  );
};
