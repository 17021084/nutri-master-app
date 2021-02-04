import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import color from "../../../constants/color";

import Calo from "../../../../assets/images/calories.svg";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function SplashScreen1() {
  return (
    <View style={styles.container}>
      <Calo width={windowWidth} />
      <Text style={styles.title}>Search Nutritions </Text>
      <Text style={styles.desciptions}>
        You can find the nutritions of food or drinyou can find the nutritions
        of food or drink by name
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: windowHeight * 0.1,
    alignItems: "center",
  },
  title: {
    fontFamily: "vinc-hand",
    fontSize: 56,
    fontWeight: "900",
    color: color.pink,
    marginTop: 50,
    textAlign: "center",
  },
  desciptions: {
    fontFamily: "open-sans",
    fontSize: 23,
    fontWeight: "300",
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 50,
    textAlign: "center",
  },
});
