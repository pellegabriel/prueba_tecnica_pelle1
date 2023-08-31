import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CustomInput, CustomButton } from '../components';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigationTypes';
import { BottonLogin } from '../components/BottonLogin';

interface InputField {
  placeholder: string;
  name: string;
  onChange: (name: string, text: string) => void;
}
type Props = StackScreenProps<RootStackParamList, 'LoginScreen'>;

export const LoginScreen: React.FC<Props> = ({ route }) => {
  const [formValid, setFormValid] = useState(true);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'LoginScreen'>>();
  const inputFields: InputField[] = [
    { name: 'email', placeholder: 'hola@tuemail.com', onChange: handleInputChange },
    { name: 'password', placeholder: 'ingresa tu contraseña', onChange: handleInputChange },
  ];
  const [formData, setFormData] = useState(route.params.formData);
  const [inputData, setInputData] = useState({
    email: '',
    password: ''
  });
  
  function handleInputChange(name: string, text: string) {
    setInputData({
      ...inputData,
      [name]: text,
    });
  }
  
  function validateForm() {
    const { email, password } = inputData;
  
    if (!email || !password) {
      setFormValid(false);
      return false;
    }
  
    if (email !== formData.email || password !== formData.password) {
      setFormValid(false);
      return false;
    }
  
    setFormValid(true);
    return true;
  }
  
  const navigateToHome = () => {
    if (validateForm()) {
      navigation.navigate('ProfileScreen', { formData });
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>¡Iniciar sesión!</Text>
      {inputFields.map((field, index) => (
        <CustomInput
          key={index}
          placeholder={field.placeholder}
          onChangeText={(text: string) => field.onChange(field.name, text)}
          isPassword={field.placeholder === 'ingresa tu contraseña'}
        />
      ))}
      {!formValid && <Text style={{color: 'red', paddingBottom: 10}}>Datos incorrectos..</Text>}
      <BottonLogin
        onPress={navigateToHome}
        text={'Regístrate'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', // Cambia aquí de 'center' a 'flex-start'
    backgroundColor: 'white',
    paddingTop: 30
  },
  title: {
    color: 'black',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 35,
    marginTop: 50,
  },
});
