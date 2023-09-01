import { useState, useEffect } from "react";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigationTypes';
import { useNavigation } from '@react-navigation/native';

interface InputField {
    placeholder: string;
    name: string;
    onChange: (name: string, text: string) => void;
  }

export function useRegisterController() {
  const [formData, setFormData] = useState({
    username: '',
    phoneNumber: '',
    email: '',
    password: '',
    image: null as string | null,
  });
  const inputFields: InputField[] = [
    { name: 'username', placeholder: 'Nombre y Apellido', onChange: handleInputChange },
    { name: 'phoneNumber', placeholder: '+54 9 221 000 0000', onChange: handleInputChange },
    { name: 'email', placeholder: 'hola@tuemail.com', onChange: handleInputChange },
    { name: 'password', placeholder: 'ingresa tu contraseña', onChange: handleInputChange },
  ];
  
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'RegisterScreen'>>();
  const [formValid, setFormValid] = useState(true);

  useEffect(() => {
    console.log('Validando algo...'); 
  }, []);
  
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
    setFormValid(true);
    return true;
  }

  function handleImageCaptured(uri: string) {
    setFormData({
      ...formData,
      image: uri
    });
  }

  function navigateToProfile() {
    if (validateForm()) {
      navigation.navigate('LoginScreen', { formData });
    }
  }

  function navigateToLogin() {
    throw new Error('Not implemented.');
  }

  return {
    formData,
    formValid,
    handleInputChange,
    validateForm,
    handleImageCaptured,
    navigateToProfile,
    navigateToLogin,
    inputFields
  };
}
