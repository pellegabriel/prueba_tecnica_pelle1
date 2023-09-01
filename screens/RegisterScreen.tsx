import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CustomInput, CustomButton } from '../components';
import Header from '../components/Header';
import { BottonRegister } from '../components/BottonRegister';
import { ForgotPassword } from '../components/ForgotPassword';
import { OpenNativeCamera } from '../components/openNativeCamera';
import { useRegisterController } from '../controllers/registerControllers';

export const RegisterScreen = () => {
  const {
    formValid,
    handleImageCaptured,
    navigateToProfile,
    navigateToLogin,
    inputFields
  } = useRegisterController(); 

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>¡Bienvenido!</Text>
      <Text style={styles.subTitle}>Conviértete ahora en un agente Flexy.</Text>
      <OpenNativeCamera onImageCaptured={(uri) => handleImageCaptured(uri)} />
      {inputFields.map((field, index) => (
        <CustomInput
          key={index}
          placeholder={field.placeholder}
          onChangeText={(text: string) => field.onChange(field.name, text)}
          isPassword={field.placeholder === 'ingresa tu contraseña'}
        />
      ))}
      {!formValid && <Text style={{color: 'red'}}>Por favor, completa todos los campos</Text>}
      <ForgotPassword
        onPress={navigateToLogin}
        text={'¿Olvidaste tu contraseña?'}
      />
      <BottonRegister
        onPress={navigateToProfile}
        text={'Regístrate'}
      />
      <CustomButton
        onPress={navigateToLogin}
        text={'¿Ya tienes una cuenta? Inicia sesión'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: -60,
  },
  title: {
    color: 'black',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 50,
    fontFamily: 'PlusJakartaSans',
  },
  subTitle: {
    color: '#C0C0C0',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 0,
  },
});
