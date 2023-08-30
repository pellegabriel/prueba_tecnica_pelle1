import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Header: React.FC = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../assets/logo.png')} // Reemplaza con la ruta a tu logo
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 72, // Puedes ajustar la altura según tus necesidades
    backgroundColor: 'white',
    flexDirection: 'row', // Añade esto
    justifyContent: 'flex-end', // Añade esto
    alignItems: 'center',
    marginTop: 0,
  },
  logo: {
    width: 210, // Puedes ajustar el ancho según tus necesidades
    height: 100,// Puedes ajustar la altura según tus necesidades
  },
});

export default Header;
