import React from 'react';
import {View, StyleSheet} from 'react-native';
import CreaditSimulator from './components/CreditSimulator';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <CreaditSimulator />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A3B67',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
