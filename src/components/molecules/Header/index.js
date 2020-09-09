import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {IconBackDark} from '../../../assets';
import {Gap} from '../../../components';
import {colors} from '../../../utils';

const Header = () => {
  return (
    <View style={styles.container}>
      <IconBackDark />
      <Text style={styles.text}>Component Header</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 20,
    color: colors.text.primary,
  },
});
