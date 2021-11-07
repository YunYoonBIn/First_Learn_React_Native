import { Pressable, Text } from "react-native";
import React from "react";
import PropTypes from "prop-types";

const MyButton = (props) => {
  return (
    <Pressable
      style={{
        backgroundColor: "#3498db",
        padding: 16,
        margin: 10,
        borderRadius: 8,
      }}
      onPress={() => props.onPress()}
    >
      <Text style={{ fontSize: 24, color: "white" }}>
        {props.children || props.title}
      </Text>
    </Pressable>
  );
};

MyButton.defaultProps = {
  title: "defult Props",
};

MyButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};
export default MyButton;
