import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
// import Svg, { Use, Image } from "react-native-svg";
// import logo from '../../../assets/logo_app.png'
import Logo2 from '../../../assets/images/Logo app.svg'

export default function SplashScreen1() {
  return (
    <View style={styles.container}>
      <Text>splash screen 1</Text>
        <Logo2/>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ff2",
    alignItems: "center",
    justifyContent: "center",
    // flex:1
    // width: ,
    // display:'flex'
  },
  image: {
    // flex: 1,
    backgroundColor: "blue",
    height: 163,
    width: 163,
  },
});
