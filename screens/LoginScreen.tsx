import React from 'react';
import { View, Text, StyleSheet,  } from 'react-native';
import { CustomInput,  } from '../components';
import Header from '../components/Header';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigationTypes';
import { BottonLogin } from '../components/BottonLogin';
import { useLoginController } from '../controllers/logInControllers';

type Props = StackScreenProps<RootStackParamList, 'LoginScreen'>;

export const LoginScreen: React.FC<Props> = ({ route }) => {
  const {
    formValid,
    handleInputChange,
    navigateToHome
  } = useLoginController(route);

  const inputFields = [
    { name: 'email', placeholder: 'hola@tuemail.com', onChange: handleInputChange },
    { name: 'password', placeholder: 'ingresa tu contraseña', onChange: handleInputChange },
  ];

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