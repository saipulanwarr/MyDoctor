import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Header, Profile, List, Gap} from '../../components';
import {colors} from '../../utils';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      <Profile name="Saipul Anwar" desc="Mobile Developer" />
      <Gap height={14} />
      <List
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List type="next" icon="language" />
      <List type="next" icon="rate" />
      <List type="next" icon="help" />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
