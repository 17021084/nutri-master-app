import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen2 from "./src/screens/unAuthScreens/SplashScreen2";
import { useFonts } from "expo-font";
import SignInScreen from "./src/screens/unAuthScreens/SignInScreen";
import SignUpScreen from "./src/screens/unAuthScreens/SignUpScreen";

export default function App() {
  const [loaded, error] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "vinc-hand": require("./assets/fonts/VINCHAND.ttf"),
  });

  if (!loaded) {
    return (
      <Text style={styles.container}>Loadd fontssssssssss sssssssssssssss</Text>
    );
  } else {
    return (
      <View style={styles.container}>
      <SignUpScreen></SignUpScreen>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
