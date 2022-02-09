import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

import { colors, parameters } from '../global/styles';

export default function Header({navigation, title, typeIcon='arrow-left'}) {
  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>
        <Icon
          type='material-community'
          name={typeIcon}
          color = {colors.headerText}
          size={28}
          onPress = {() => {
            navigation.goBack();
          }}
        />
       </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
    paddingVertical: 5,
  },

  containerIcon: {
    marginLeft: 20
  },

  headerText: {
    color: colors.headerText,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 30
  },
});
