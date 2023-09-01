import { useState } from "react";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigationTypes';
import { useNavigation } from '@react-navigation/native';

export function useLoginController(route: any) {
  const [formValid, setFormValid] = useState(true);
  const [formData, setFormData] = useState(route.params.formData);
  const [inputData, setInputData] = useState({
    email: '',
    password: ''
  });

  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'LoginScreen'>>();
  
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
  
  function navigateToHome() {
    if (validateForm()) {
      navigation.navigate('ProfileScreen', { formData });
    }
  }

  return {
    formValid,
    handleInputChange,
    navigateToHome
  };
}
