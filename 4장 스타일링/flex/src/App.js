import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { viewStyles, textStyles } from './styles';
import { Header, Footer, Contents } from './Layout';

export default function App() {
  return (
    <View style={viewStyles.container}>
      <Header></Header>
      <Contents></Contents>
      <Footer></Footer>
    </View>
  );
}

 