import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

interface CustomInputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  isPassword?: boolean;
}

export const CustomInput: React.FC<CustomInputProps> = ({ placeholder, onChangeText, isPassword }) => {
  const [isSecure, setIsSecure] = useState(true);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={'#969696'}
        onChangeText={onChangeText}
        secureTextEntry={isPassword ? isSecure : false}
      />
      {isPassword && (
        <TouchableOpacity onPress={() => setIsSecure(!isSecure)} style={styles.iconContainer}>
          <Image
            source={require('../assets/eye.png')} 
            style={styles.logo}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '80%',
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingHorizontal: 15,
    borderRadius: 8,
    height: 50,
    color: 'black',
    backgroundColor: '#F7F7FD',
    borderColor: '#E0DEF7',
    borderWidth: 0.5,
    fontSize: 16,
  },
  iconContainer: {
    position: 'absolute',
    right: 15,
  },
  logo: {
    width: 24,
    height: 24,
  },
});
