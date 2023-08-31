import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CustomButtonProps {
     onPress: () => void;
     text: string;
   }
   
export const CustomButton = ({ } : CustomButtonProps) => {
     return (
   
          <TouchableOpacity
               activeOpacity={0.5}

          >
          <Text style={styles.textContainer}>
               <Text style={styles.firstPart}>¿Ya tenes una cuenta? </Text>
               <Text style={styles.secondPart}>Inicia sesion</Text>
          </Text>

          </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row', 
    paddingTop: 20
  },
  firstPart: {
     fontWeight: '300',
     color: 'black',
  },
  secondPart: {
     fontWeight: '500',
     color: 'black',
  },
});
