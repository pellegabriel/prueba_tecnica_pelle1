import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function CustomButton() {
     return (
          <TouchableOpacity
               activeOpacity={0.9}
               // style={[Style]}
               // onPress={isLoading ? undefined : onPress}
          >
               <Text style={[styles.button_text]}>
                    {/* {isLoading ? 'Cargando...' : ''} */}gg
               </Text>
          </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
     button_text: {
          fontWeight: '300',
          color: '#ffff',
     },
});
