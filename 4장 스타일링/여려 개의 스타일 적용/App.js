import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, {color: "green"}]}>
       Class Styleng - text</Text>
       <Text style={[styles.text, styles.error]}>
       Class Styleng - error
       </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent: "center",
  },
  text: {
    padding: 10,
    fontSize: 26,
    fontWeight: '600',
    color: "black",
  },
  error: {
    fontWeight: "400",
    color: "red",
  }
})
 