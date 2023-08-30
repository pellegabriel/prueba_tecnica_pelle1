import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CustomButtonProps {
     onPress: () => void;
     text: string;
     // cualquier otra prop que quieras definir
   }
   
export const CustomButton: React.FC<CustomButtonProps> = ({ onPress, text }) => {
     return (
   
          <TouchableOpacity
               activeOpacity={0.5}
               // style={[Style]}
               // onPress={isLoading ? undefined : onPress}
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
