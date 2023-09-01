import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigationTypes';
import Header from '../components/Header';
import { OpenNativeCamera } from '../components/openNativeCamera';
import { useProfileController } from '../controllers/profileControllers';

type Props = StackScreenProps<RootStackParamList, 'ProfileScreen'>;

export const ProfileScreen: React.FC<Props> = ({ route }) => {
  const {
    imageUri,
    handleImageCaptured
  } = useProfileController(route); 
  
  return (
    <View style={styles.container}>
      <Header/>
      <Text style={styles.title}>Este es el perfil</Text>
      {imageUri ? (
        <Image 
          source={{ uri: imageUri }} 
          style={{ width: 150, height: 150, borderRadius: 100, marginTop: 30 }}
        />
      ) : (
        <OpenNativeCamera onImageCaptured={handleImageCaptured} />
      )}
      <Text style={styles.textContainer}>
          <Text style={styles.firstPart}>Usuario: </Text>
          <Text style={styles.secondPart}>{route.params.formData.username}</Text>
      </Text>
      <Text style={styles.textContainer}>
          <Text style={styles.firstPart}>Tel.: </Text>
          <Text style={styles.secondPart}>{route.params.formData.phoneNumber}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', 
    paddingTop: 30, 
    alignItems: 'center', 
    justifyContent: 'flex-start',
    backgroundColor: 'white' 
  },
  title: {
    fontWeight: '500',
    color: 'black',
    fontSize: 20,
    marginTop: 50
 },
  text: {
     fontWeight: '400',
     color: 'black',
  },
  textContainer: {
    flexDirection: 'row', 
    paddingTop: 20,
    width: 300,
  },
  firstPart: {
     fontWeight: '500',
     color: 'black',
     fontSize: 16

  },
  secondPart: {
     fontWeight: '300',
     color: 'black',
     fontSize: 16

  },

});
