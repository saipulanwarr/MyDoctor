import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {showMessage} from 'react-native-flash-message';

import {ILLogo} from '../../assets';
import {Input, Link, Button, Gap, Loading} from '../../components';
import {colors, fonts, storeData, useForm} from '../../utils';
import {Fire} from '../../config';

const Login = ({navigation}) => {
  const [laoding, setLoading] = useState(false);
  const [form, setForm] = useForm({email: '', password: ''});

  const login = () => {
    setLoading(true);
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        console.log(res);
        Fire.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then((resDB) => {
            if (resDB.val()) {
              storeData('user', resDB.val());
              navigation.replace('MainApp');
            }
          });
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        showMessage({
          message: error.message,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };
  return (
    <>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={40} />
          <ILLogo />
          <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
          <Input
            label="Email Address"
            value={form.email}
            onChangeText={(value) => setForm('email', value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={form.password}
            onChangeText={(value) => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={10} />
          <Link title="Forgot My Password" size={12} />
          <Gap height={40} />
          <Button title="Sign In" onPress={login} />
          <Gap height={30} />
          <Link
            title="Create New Account"
            size={16}
            align="center"
            onPress={() => navigation.replace('Register')}
          />
        </ScrollView>
      </View>
      {laoding && <Loading />}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 40,
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    marginVertical: 40,
    fontFamily: fonts.primary[600],
    fontSize: 20,
    maxWidth: 153,
    color: colors.text.primary,
  },
});
