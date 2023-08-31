import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface BottonLoginProps {
  onPress: () => void;
  text: string;
}

export const BottonLogin = ({ onPress, text } : BottonLoginProps ) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={styles.buttonContainer}
    >
      <Text style={styles.buttonText}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '80%',
    backgroundColor: 'rgba(83, 56, 158, 1)',
    padding: 15,  
    borderRadius: 10,  
    alignItems: 'center',  
  },
  buttonText: {
    fontWeight: '500',
    color: '#ffffff', 
    fontSize: 16
  },
});