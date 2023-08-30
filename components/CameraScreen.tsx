import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import ImagePicker, { CameraOptions } from 'react-native-image-picker';

interface Photo {
  uri: string;
}

export const CameraScreen: React.FC = () => {
  const [photo, setPhoto] = useState<Photo | null>(null);

  const handleChoosePhoto = () => {
    const options: CameraOptions = {
      mediaType: 'photo',
    };

    ImagePicker.launchCamera(options, (response) => {
      if (response.assets && response.assets[0].uri) {
        setPhoto({ uri: response.assets[0].uri });
      }
    });
  };

  return (
    <View style={styles.container}>
      {photo && <Image source={{ uri: photo.uri }} style={{ width: 300, height: 300 }} />}
      
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={handleChoosePhoto}>
          <Image
            source={require('../assets/camera.png')} // Reemplaza con la ruta a tu logo
            style={styles.logo}
            resizeMode="contain"
          />        
        </TouchableOpacity>
        <Text style={styles.text}>Subi tu foto de perfil</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row', // Añade esto
    justifyContent: 'flex-start', // Añade esto
    alignItems: 'center',
    width: '100%', 
    marginBottom: 20
  },
  logo: {
    width: '100%', 
    height: '100%', 
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,  
    paddingLeft: 50
  },
  button: {
    backgroundColor: '#F7F7FD',
    borderColor: '#E0DEF7',  
    borderWidth: 0.5, 
    padding: 10,
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  text: {
    marginLeft: 10,
    color: 'black'  // Add some space between the button and the text
  },
});
