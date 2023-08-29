import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CustomInput, CustomButton } from '../components';
// import { RootStackScreenProps } from '../navigation/types';

export function RegisterScreen() {
     // const [user, setUser] = useState({
     //      name: '',
     //      email: '',
     //      password: '',
     //      repeatPassword: '',
     //      address: {
     //           value: '',
     //           coordinate: {
     //                latitude: 0,
     //                longitude: 0,
     //           },
     //      },
     //      city: '',
     // });

    //  const [isInitializing, setIsInitializing] = useState<boolean>(false);

     // const { name, email, password, repeatPassword } = user;

    //  const allFields = inputFields(
    //       text => setUser(prev => ({ ...prev, name: text })),
    //       text => setUser(prev => ({ ...prev, email: text })),
    //       text => setUser(prev => ({ ...prev, password: text })),
    //       text => setUser(prev => ({ ...prev, repeatPassword: text })),
    //       name,
    //       email,
    //       password,
    //       repeatPassword || '',
    //  );

    //  const emailIndex = allFields.findIndex(field => placeholder === 'Email');
    //  const beforeEmailFields = allFields.slice(0, emailIndex);
    //  const afterEmailFields = allFields.slice(emailIndex);

    //  const handleAddressSelection = (address: string, city: string) => {
    //       setUser(prev => ({
    //            ...prev,
    //            address: {
    //                 ...prev.address,
    //                 value: address,
    //            },
    //            city: city,
    //       }));
    //  };
    //  const handleSendRegisterData = async () => {
        //   setIsInitializing(true);
        //   await sendRegisterData(user, navigation);
        //   setIsInitializing(false);
    //  };

     return (
          <View style={styles.container}>
               <Text style={styles.text}>Register</Text>

               {/* {beforeEmailFields.map((field, index) => ( */}
                    <CustomInput
                         placeholder={''}
                         // value={value}
                         onChangeText={text => onChange(text)}
                    />
               {/* ))} */}
               <CustomButton
                    // onPress={handleSendRegisterData}
                    // text={isInitializing ? 'Cargando...' : 'Register'}
                    // isLoading={isInitializing}
                    // buttonStyle={styles.button}
               />
               <CustomButton
                    onPress={() => navigation.navigate('Login')}
                    text={'Log In with an existing account'}
               />
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#33B0B4',
     },
     text: {
          color: '#ffffff',
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 20,
     },
     button: {
          marginBottom: 10,
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          borderRadius: 8,
          backgroundColor: '#62D7DB',
          width: '80%',
          height: 40,
     },
     button_image: {
          position: 'absolute',
          left: '8%',
          width: 15,
          height: 15,
     },
});
