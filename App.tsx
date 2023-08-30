import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { RegisterScreen } from './screens/RegisterScreen';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <RegisterScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});

export default App;
