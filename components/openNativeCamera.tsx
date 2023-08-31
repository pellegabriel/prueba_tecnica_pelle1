import React, { useState } from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { launchCamera, CameraOptions, MediaType } from 'react-native-image-picker';

interface OpenNativeCameraProps {
  onImageCaptured: (uri: string) => void;
}

export const OpenNativeCamera = ({ onImageCaptured } : OpenNativeCameraProps) => {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const openCamera = () => {
    const options: CameraOptions = {
      quality: 0.5,
      mediaType: 'photo' as MediaType,
      saveToPhotos: true,
    };

    launchCamera(options, (response: any) => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.errorMessage) {
        console.log('Camera Error: ', response.errorMessage);
      } else {
        const source = { uri: response.assets[0].uri };
        setImageUri(source.uri);
        console.log('photo source', source);

        onImageCaptured(source.uri);
      }
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={openCamera}>
        <View style={styles.button}>
            {imageUri ? (
              <Image
                source={{ uri: imageUri }}
                style={{ width: 40, height: 40, borderRadius: 100 }}
              />
            ) : (
              <Image
              source={require('../assets/camera.png')}
              style={styles.logo}
              resizeMode="contain"
            />        )}

        </View>
        <Text style={styles.text}>Subi tu foto de perfil</Text>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    marginTop: 25
  },
  logo: {
    width: '80%',
    height: '80%',
  },
  button: {
    backgroundColor: '#F7F7FD',
    borderColor: '#E0DEF7',
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 100,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 40
  },
  text: {
    marginLeft: 10,
    color: 'black',
    fontWeight: '500',
    fontSize: 16
  },
});


