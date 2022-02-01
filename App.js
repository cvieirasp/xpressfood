import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';
import { colors } from './src/global/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor={colors.statusBar} />
      <Header title='MINHA CONTA' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 }
});
