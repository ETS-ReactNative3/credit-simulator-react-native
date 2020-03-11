import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: 'transparent',
  },
});

export default function LoanInfo({fixedFee}) {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>CUOTA FIJA POR MES</Text>
      <Text style={styles.fixedFee}>{fixedFee}</Text>
    </View>
  );
}

import {} from 'react-native';
