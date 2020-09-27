import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Header, Profile, ProfileItem, Button, Gap} from '../../components';
import {colors} from '../../utils';

const DoctorProfile = () => {
  return (
    <View style={styles.page}>
      <Header title="Doctor Profile" />
      <Profile name="Saipul Anwar" desc="Dokter Anak" />
      <Gap height={10} />
      <ProfileItem label="Alumnus" value="Universitas Pakuan, 2020" />
      <ProfileItem label="Tempat Praktik" value="Rumah Sakit Umum" />
      <ProfileItem label="No. STR" value="0000000012321" />
      <View style={styles.action}>
        <Button title="Start Consultation" />
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  action: {
    paddingHorizontal: 40,
    paddingTop: 23,
  },
});
