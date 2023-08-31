import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ForgotPasswordProps {
     onPress: () => void;
     text: string;
   }
   
export const ForgotPassword: React.FC<ForgotPasswordProps> = ({ onPress, text }) => {
     return (
   
          <TouchableOpacity
               activeOpacity={0.5}
          >
               <Text style={[styles.button_text]}>
               {text}
               </Text>
          </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
     button_text: {
          fontWeight: '300',
          color: '#7065F0',
          paddingBottom: 20,
          fontSize: 16
     },
     
});
