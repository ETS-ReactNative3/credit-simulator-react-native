import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import SimulatorOption from './components/SimulatorOption';
import LoanInfo from './components/LoanInfo';
import CustomButton from '../../components/CustomButton';
import styles from './styles';
import CustomText from '../../components/CustomText'

const initialState = {
  loanAmount: 16500,
  payoutDelay: 16,
  fixedFee: 0
}

const reducer = (state, action) => {
  switch (key) {
    case 'UpdateLoanAmount':
      return {
        ...state,
        loanAmount: action.payload.amount
      }
    case 'UpdatePayoutDelay':
    return {
      ...state,
      loanAmount: action.payload.amount
    }
    case 'UpdateLoanAmount':
    return {
      ...state,
      loanAmount: action.payload.amount
    }
    default:
      throw new Error();
  }
}

export default function CreditSimulator() {
  const [totalAmount, setTotalAmount] = useState(16500);
  const [payoutDelay, setPayoutDelay] = useState(16);
  const [fixedFee, setFixedFee] = useState();

  useEffect(() => {
    const fixedFeeCal = (
      (isFinite(totalAmount / payoutDelay) && totalAmount / payoutDelay) ||
      0
    ).toFixed(2);
    setFixedFee(fixedFeeCal)
  }, [totalAmount, payoutDelay])

  console.log({totalAmount, payoutDelay, fixedFee})
  return (
    <View style={styles.container}>
      <CustomText style={styles.simulatorTitle}>Simulá tu crédito</CustomText>
      <View style={styles.simulatorOptionsContainer}>
        <SimulatorOption
          label="MONTO TOTAL"
          minimumValue={5000}
          maximumValue={50000}
          initialAmount={totalAmount}
          onChangeOption={setTotalAmount}
          currency
        />
        <SimulatorOption
          label="PLAZO"
          minimumValue={3}
          maximumValue={24}
          initialAmount={payoutDelay}
          onChangeOption={setPayoutDelay}
        />
      </View>
      <View style={styles.loanInfoContainer}>
        <LoanInfo fixedFee={fixedFee} />
        <View style={styles.callToActions}>
          <CustomButton 
            buttonText={'OBTENÉ CRÉDITO'} 
            color={'#37AA8D'} large />
          <View style={{width: 8}} />
          <CustomButton
            buttonText={'VER DETALLE DE \nCUOTAS'}
            color={'#12538B'}
          />
        </View>
      </View>
    </View>
  );
}
