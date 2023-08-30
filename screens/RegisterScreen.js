import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CustomInput, CustomButton } from '../components';

export function RegisterScreen() {
     const inputFields = [
       { placeholder: 'Nombre y Apellido', onChange: text => console.log(`Username: ${text}`) },
       { placeholder: '+54 9 221 000 0000', onChange: text => console.log(`Email: ${text}`) },
       { placeholder: 'hola@tuemail.com', onChange: text => console.log(`Password: ${text}`) },
       { placeholder: 'ingresa tu contraseña', onChange: text => console.log(`Password: ${text}`) },
       // Añade más campos aquí
     ];
   
     const navigateToLogin = () => {
       // Aquí se manejaría la navegación a la pantalla de inicio de sesión
     };
   
     return (
       <View style={styles.container}>
         <Text style={styles.text}>Register</Text>
         {inputFields.map((field, index) => (
           <CustomInput
             key={index}
             placeholder={field.placeholder}
             onChangeText={text => field.onChange(text)}
           />
         ))}
         <CustomButton
           onPress={navigateToLogin}
           text={'Log In with an existing account'}
         />
       </View>
     );
   }

const styles = StyleSheet.create({
     container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#33B0B4',
     },
     text: {
          color: '#ffffff',
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 20,
     },
});
