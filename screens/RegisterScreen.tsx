import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CustomInput, CustomButton } from '../components';
import { CameraScreen } from '../components/CameraScreen';
import Header from '../components/Header';
import { BottonRegister } from '../components/BottonRegister';
import { ForgotPassword } from '../components/ForgotPassword';

interface InputField {
  placeholder: string;
  name: string;
  onChange: (name: string, text: string) => void;
}

export const RegisterScreen: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    phoneNumber: '',
    email: '',
    password: ''
  });

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

  const navigateToLogin = () => {
    if (validateForm()) {
      // Aquí se manejaría la navegación a la pantalla de inicio de sesión
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>¡Bienvenido!</Text>
      <Text style={styles.subTitle}>Conviértete ahora en un agente Flexy.</Text>
      <CameraScreen />
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
        onPress={navigateToLogin}
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: 35,
  },
  title: {
    color: 'black',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 50,
  },
  subTitle: {
    color: '#C0C0C0',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 0,
  },
});
