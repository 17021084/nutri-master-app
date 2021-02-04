import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LogoSVG from "../../../assets/images/Logo app.svg";
import color from "../../constants/color";
export default function index() {
  return (
    <View style={styles.container}>
      <LogoSVG height={100} width={100} />
      <Text style={styles.text}>Nutri Master </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 100,
    alignItems: "center",
    marginVertical: 20,
  },
  text: {
    color: color.pink,
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 40,
  },
});
