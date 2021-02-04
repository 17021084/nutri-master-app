import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Screen
import SignInScreen from "../screens/unAuthScreens/SignInScreen";
import SignUpScreen from "../screens/unAuthScreens/SignUpScreen";
import RootSplashScreen from "../screens/unAuthScreens/splash/RootSplashScreen";

const Stack = createStackNavigator();
export default function UnAuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="splash" component={RootSplashScreen} />
      <Stack.Screen name="signin" component={SignInScreen} />
      <Stack.Screen name="signup" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
