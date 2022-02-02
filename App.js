import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import { colors } from './src/global/styles';
import SignInScreen from './src/screens/authScreens/SignInScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor={colors.statusBar} />
      <SignInScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 }
});
