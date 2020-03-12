import React from 'react';
import {View} from 'react-native';
import CustomText from '../../../../components/customText';
import {currencyFormat} from '../../../../utils';
import styles from './styles';

export default function LoanInfo({monthlyPay}) {
  return (
    <View style={styles.container}>
      <CustomText style={styles.message}>CUOTA FIJA POR MES</CustomText>
      <CustomText style={styles.monthlyPay}>
        {currencyFormat(monthlyPay, 2)}
      </CustomText>
    </View>
  );
}
