import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import SimulatorOption from './SimulatorOption';

export default function CreditSimulator() {
  return (
    <View style={styles.container}>
      <Text style={styles.simulatorTitle}>Simulá tu crédito</Text>
      <View style={styles.simulatorOption}>
        <SimulatorOption
          label="MONTO TOTAL"
          minimumValue={5000}
          maximumValue={50000}
        />
        <SimulatorOption label="PLAZO" minimumValue={3} maximumValue={24} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0E4678',
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
  },
  simulatorTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  simulatorOption: {
    height: 200,
    width: '100%',
    backgroundColor: 'tomato',
  },
});
