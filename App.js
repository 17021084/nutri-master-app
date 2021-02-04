import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import RoundedButton from "./src/components/RoundedButton";
import UnAuthStack from "./src/navigations/UnAuthStack";

// const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "vinc-hand": require("./assets/fonts/VINCHAND.ttf"),
  });

  const [token, setToken] = useState(false);

  if (!loaded) {
    return (
      <Text style={styles.container}>Loadd fontssssssssss sssssssssssssss</Text>
    );
  } else {
    return (
      <NavigationContainer style={styles.container}>
        <UnAuthStack/>
      </NavigationContainer>
    );
  }
}

// <RoundedButton
//   onPress={() => {
//     setToken(true);
//   }}
// >
//   <Text> ingnore login</Text>
// </RoundedButton>;

// const UnAuthStack = () => (
//   <Stack.Navigator screenOptions={{ headerShown: false }}>
//     <Stack.Screen name="splash" component={RootSplashScreen} />
//     <Stack.Screen name="signin" component={SignInScreen} />
//     <Stack.Screen name="signup" component={SignUpScreen} />
//   </Stack.Navigator>
// );
// const AuthStack = () => (
//   <Stack.Navigator screenOptions={{ headerShown: false }}>
//     <Stack.Screen name="signup" component={SignUpScreen} />
//   </Stack.Navigator>
// );

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
