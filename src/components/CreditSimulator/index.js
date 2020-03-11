import React, {useState} from 'react';
import {View, Text} from 'react-native';
import SimulatorOption from '../SimulatorOption';
import LoanInfo from '../LoanInfo';
import CustomButton from '../CustomButton';
import styles from './styles';

export default function CreditSimulator() {
  const [totalAmount, setTotalAmount] = useState(16500);
  const [payoutDelay, setPayoutDelay] = useState(16);
  const fixedFee = (
    (isFinite(totalAmount / payoutDelay) && totalAmount / payoutDelay) ||
    0
  ).toFixed(2);
  return (
    <View style={styles.container}>
      <Text style={styles.simulatorTitle}>Simulá tu crédito</Text>
      <View style={styles.simulatorOptions}>
        <SimulatorOption
          label="MONTO TOTAL"
          minimumValue={5000}
          maximumValue={50000}
          initialAmount={totalAmount}
          onChangeOption={setTotalAmount}
        />
        <SimulatorOption
          label="PLAZO"
          minimumValue={3}
          maximumValue={24}
          initialAmount={payoutDelay}
          onChangeOption={setPayoutDelay}
        />
      </View>
      <LoanInfo fixedFee={fixedFee} />
      <View style={styles.callToActions}>
        <CustomButton buttonText={'OBTENÉ CRÉDITO'} color={'#37AA8D'} large />
        <View style={{width: 8}} />
        <CustomButton
          buttonText={'VER DETALLE DE \nCUOTAS'}
          color={'#12538B'}
        />
      </View>
    </View>
  );
}
