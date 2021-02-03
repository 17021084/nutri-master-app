import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import color from "../../constants/color";

import Diet from "../../../assets/images/diet plan.svg";
import RoundedButton from "../../components/RoundedButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function SplashScreen2() {
  return (
    <View style={styles.container}>
      <Diet width={windowWidth} />
      <Text style={styles.title}>Analyis your recipe </Text>
      <Text style={styles.desciptions}>
        you can create your favor recipe and analysis nutritions of recipe
      </Text>
      <RoundedButton
        onPress={() => {
          console.log("123");
        }}
        backgroundColor={"pink"}
        width={windowWidth * 0.8}
      >
        <Text style={styles.buttonName}>Let's Try Now !!</Text>
      </RoundedButton>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: windowHeight * 0.13,
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
  buttonName: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 29,
    fontStyle: "italic",
  },
});
