import React from "react";
import { TouchableOpacity, StyleSheet, Dimensions } from "react-native";

//HOC
export default function RoundedButton({
  onPress,
  children,
  backgroundColor,
  width,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor: backgroundColor, width: width },
      ]}
    >
      {children}
    </TouchableOpacity>
  );
}
const windowWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    height: 60,
    borderRadius: 40,
    display: "flex",
    alignItems: "center",
    marginTop: 50,
    paddingVertical: 10,
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowOffset: { height: 1, width: 1 },
  },
});
