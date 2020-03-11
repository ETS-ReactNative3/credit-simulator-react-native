import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CreditSimulator} from './screens';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <CreditSimulator />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#114E82',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
