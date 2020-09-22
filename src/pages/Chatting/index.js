import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Header, ChatItem, InputChat} from '../../components';
import { fonts, colors } from '../../utils';

const Chatting = () => {
  return (
    <View>
      <Header type="dark-profile" title="Saipul Anwar" />
      <Text style={styles.chatDate}>21, Maret 2020</Text>
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <InputChat />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  }
});
