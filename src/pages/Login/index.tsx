import {Formik} from 'formik';
import React from 'react';
import {Image, KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import {Card} from 'react-native-paper';
import * as Yup from 'yup';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';

export default function Login() {
  return (
    <Formik
      initialValues={{email: '', senha: ''}}
      onSubmit={console.log}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .required('Informação necessária')
          .email('Digite um email válido'),
        senha: Yup.string().required('Informação necessária'),
      })}>
      {(formik) => (
        <Card style={styles.root}>
          <KeyboardAvoidingView style={styles.container} behavior="padding">
            <Image
              source={{
                uri:
                  'https://raw.githubusercontent.com/callstack/react-native-paper-login-template/8d88cdbf1c551d3403b36c09c63dfd046adf776e/src/assets/logo.png',
              }}
              style={styles.image}
            />
            <TextInput
              label="Email"
              returnKeyType="next"
              value={formik.values.email}
              onChangeText={formik.handleChange('email')}
              error={!!formik.errors.email && !!formik.touched.email}
              errorText={formik.errors.email}
              autoCapitalize="none"
              autoCompleteType="email"
              textContentType="emailAddress"
              keyboardType="email-address"
            />
            <TextInput
              label="Senha"
              returnKeyType="done"
              value={formik.values.senha}
              onChangeText={formik.handleChange('senha')}
              error={!!formik.errors.senha && !!formik.touched.senha}
              errorText={formik.errors.senha}
              secureTextEntry
            />
            <Button mode="contained" onPress={formik.handleSubmit}>
              Login
            </Button>
          </KeyboardAvoidingView>
        </Card>
      )}
    </Formik>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 128,
    height: 128,
    marginBottom: 12,
  },
});
