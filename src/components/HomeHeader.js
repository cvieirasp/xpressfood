import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, withBadge } from 'react-native-elements';

import { colors, parameters } from '../global/styles';

export default function HomeHeader() {
  const BadgeIcon = withBadge(0)(Icon);

  return (
    <View style={styles.container}>
      <View style={styles.containerIconMenu}>
        <Icon
          type='material-community'
          name='menu'
          color={colors.cardBackground}
          size={32}
        />
      </View>

      <View style={styles.containerHeaderText}>
        <Text style={styles.headerText}>XpressFood</Text>
      </View>

      <View style={styles.containerIconCart}>
        <BadgeIcon
          type='material-community'
          name='cart'
          color={colors.cardBackground}
          size={35}
        />
      </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
    justifyContent: 'space-between',
  },

  containerIconMenu: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },

  containerHeaderText: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerText: {
    color: colors.cardBackground,
    fontSize: 25,
    fontWeight: 'bold',
  },

  containerIconCart: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
});
