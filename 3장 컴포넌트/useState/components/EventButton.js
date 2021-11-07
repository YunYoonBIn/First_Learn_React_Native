import React from "react";
import { Pressable, Text } from "react-native";

const EventButton = () => {
    const _onPressIn = () => {console.log("터치가 시작될 때 항상 호출\n")}
    const _onPressOut = () => {console.log("터치가 해제될 때 항상 호출\n")}
    const _onPress = () => {console.log("터치가 해제될 때 onPressOut 이후 호출\n")}
    const _onLongPress = () => {console.log("터치가 일정 시간 이상 지속되면 호출\n")}
    return (
       <Pressable style={{
           backgroundColor: "#f1c40f",
           padding: 16,
           margin:  10,
           borderRadius: 8,
       }}
       onPressIn={_onPressIn}
       onPressOut={_onPressOut}
       onPress={_onPress}
       onLongPress={_onLongPress}
       delayLongPress={3000} //onLongPress 딜레이
       >
          <Text style={{color: 'white', fontSize: 24}}>
              PressEvent
          </Text>
       </Pressable>
    )
}

export default EventButton;