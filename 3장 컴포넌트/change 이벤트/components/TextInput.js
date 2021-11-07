import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

const EventInput = () => {
  const [text, setText] = useState("");
  const _onChangeText = text =>setText(text)
  //react-native에서는 e.target.value가 아니라 event.nativeEvent
  return (
    <View>
      <Text style={{ margin: 10, fontSize: 30 }}>Text : {text}</Text>
   
      <TextInput 
      style={{fontSize:20, padding: 10, borderWidth: 1 }}
      placeholder=" Enter a Text..."
      onChangeText={_onChangeText}
      />
        
    </View>
  );
};

export default EventInput;
