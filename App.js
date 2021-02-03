import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen1 from './src/screens/unAuthScreens/SplashScreen1';

export default function App() {
  return (
    <View style={styles.container}>
      <SplashScreen1></SplashScreen1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
