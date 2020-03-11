import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Slider from '@react-native-community/slider';

export default function SimulatorOption({label, minimumValue, maximumValue}) {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>100</Text>
        </View>
      </View>
      <Slider
        style={styles.slider}
        minimumValue={5000}
        maximumValue={50000}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
      <View style={styles.rowContainer}>
        <Text>{minimumValue}</Text>
        <Text>{maximumValue}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  label: {
    color: 'white',
  },
  amountContainer: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 8,
  },
  slider: {
    width: 200,
    height: 40,
  },
});
