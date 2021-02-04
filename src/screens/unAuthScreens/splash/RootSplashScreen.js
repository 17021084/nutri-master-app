import React from "react";
import Swiper from "react-native-swiper";
import { StyleSheet } from "react-native";
import SplashScreen2 from "./SplashScreen2";
import SplashScreen1 from "./SplashScreen1";

export default function RootSplashScreen({ navigation }) {
  return (
    <Swiper style={styles.wrapper} showsButtons={false} loop={false}>
      <SplashScreen1 />
      <SplashScreen2 navigation={navigation} />
    </Swiper>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
});
