import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export const CustomInput = ({ placeholder, onChangeText }) => {
     return (
       <TextInput
         style={styles.input}
         placeholder={placeholder}
         placeholderTextColor={'#969696'}
         onChangeText={onChangeText}
       />
     );
   };
const styles = StyleSheet.create({
     input: {
          marginBottom: 15,
          paddingHorizontal: 10,
          borderRadius: 8,
          backgroundColor: '#ffffff',
          width: '80%',
          height: 40,
          color: 'black',
     },
});
