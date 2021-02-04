import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Logo from "../../components/Logo";
import RoundedButton from "../../components/RoundedButton";
import RoundedInput from "../../components/RoundedInput";
import color from "../../constants/color";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function SignUpScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Logo />

      <RoundedInput
        label={"Name"}
        value={"email@gmail.com"}
        placeholder={"asdasdsa"}
        onChangeText={() => {
          console.log("abc");
        }}
      />
      <RoundedInput
        label={"Email"}
        value={"email@gmail.com"}
        placeholder={"asdasdsa"}
        onChangeText={() => {
          console.log("abc");
        }}
      />

      <RoundedInput
        label={"password"}
        value={"1234567"}
        type={"password"}
        placeholder={"password"}
        onChangeText={() => {
          console.log("password");
        }}
      />
      <RoundedInput
        label={"Confirm Password"}
        value={"1234567"}
        type={"password"}
        placeholder={"password"}
        onChangeText={() => {
          console.log("password");
        }}
      />

      <RoundedButton
        onPress={() => {
          console.log("123");
        }}
        backgroundColor={"pink"}
      >
        <Text style={styles.buttonTitle}>Register </Text>
      </RoundedButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: windowHeight * 0.2,
    paddingHorizontal: windowWidth * 0.05,
  },
  buttonTitle: {
    color: "#fff",
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 30,
  },
  textForgot: {
    marginTop: 30,
    fontSize: 15,
    marginBottom: windowHeight * 0.13,
    fontStyle: "italic",
    textAlign: "center",
  },
  textRegister: {
    fontSize: 17,
    marginTop: 50,
    marginBottom: windowHeight * 0.13,
    textAlign: "center",
  },
  register: {
    fontSize: 17,
    color: color.pink,
  },
});
