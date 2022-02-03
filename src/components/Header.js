import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

import { colors, parameters } from '../global/styles';

export default function Header({title, typeIcon='arrow-left'}) {
  return (
    <View style={styles.header}>
      <View style={styles.iconContainer}>
        <Icon
          type='material-community'
          name={typeIcon}
          color = {colors.headerText}
          size={28}
          onPress = {() => {}} />
       </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
    paddingVertical: 5,
  },

  iconContainer: {
    marginLeft: 20
  },

  headerText: {
    color: colors.headerText,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 30
  }
});
