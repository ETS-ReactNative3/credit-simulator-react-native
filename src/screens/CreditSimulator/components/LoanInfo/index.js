import React from 'react';
import {View, StyleSheet} from 'react-native';
import CustomText from '../../../../components/CustomText'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: 'transparent',
  },
  message: {
    fontWeight: 'bold'
  },
  fixedFee: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default function LoanInfo({fixedFee}) {
  return (
    <View style={styles.container}>
      <CustomText style={styles.message}>CUOTA FIJA POR MES</CustomText>
      <CustomText style={styles.fixedFee}>{`$ ${fixedFee}`}</CustomText>
    </View>
  );
}

import {} from 'react-native';
