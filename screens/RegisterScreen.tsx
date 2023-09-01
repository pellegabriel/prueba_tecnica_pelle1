import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CustomInput, CustomButton } from '../components';
import Header from '../components/Header';
import { BottonRegister } from '../components/BottonRegister';
import { ForgotPassword } from '../components/ForgotPassword';
import { OpenNativeCamera } from '../components/openNativeCamera';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigationTypes';

interface InputField {
  placeholder: string;
  name: string;
  onChange: (name: string, text: string) => void;
}

export const RegisterScreen = () => {
  const [formData, setFormData] = useState({
    username: '',
    phoneNumber: '',
    email: '',
    password: '',
    image: null as string | null,
  });
  
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'RegisterScreen'>>(); // Especifica el tipo aquí

  const [formValid, setFormValid] = useState(true);

  const inputFields: InputField[] = [
    { name: 'username', placeholder: 'Nombre y Apellido', onChange: handleInputChange },
    { name: 'phoneNumber', placeholder: '+54 9 221 000 0000', onChange: handleInputChange },
    { name: 'email', placeholder: 'hola@tuemail.com', onChange: handleInputChange },
    { name: 'password', placeholder: 'ingresa tu contraseña', onChange: handleInputChange },
  ];

  function handleInputChange(name: string, text: string) {
    setFormData({
      ...formData,
      [name]: text
    });
  }
  useEffect(() => {
    console.log(styles.title);
  }, []);
  function validateForm() {
    const { username, phoneNumber, email, password } = formData;
    if (!username || !phoneNumber || !email || !password) {
      setFormValid(false);
      return false;
    }
    // Aquí puedes añadir más validaciones
    setFormValid(true);
    return true;
  }

  function handleImageCaptured(uri: string) {
    setFormData({
      ...formData,
      image: uri
    });
  }
  

  const navigateToProfile = () => {
    if (validateForm()) {
      navigation.navigate('LoginScreen', { formData });
    }
  };

  function navigateToLogin(): void {
    throw new Error('Not implemented.');
  }

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
