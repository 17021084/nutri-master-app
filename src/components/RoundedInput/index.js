import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import color from "../../constants/color";

export default function RoundedInput({
  value,
  onChangeText,
  placeholder,
  label,
  type,
}) {
  return (
    <View>
      <Text style={styles.label}>{label + ":"}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.textInput}
        textContentType={type}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 30,
  },
  label: {
    fontSize: 20,
    fontFamily: "open-sans-bold",
    color: color.green,
    paddingVertical: 10,
  },
  textInput: {
    borderRadius: 30,
    borderWidth: 0.5,
    height: 40,
    paddingHorizontal: 20,
  },
});
