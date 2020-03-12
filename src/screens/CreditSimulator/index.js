import React, {useReducer} from 'react';
import {View} from 'react-native';
import SimulatorOption from './components/SimulatorOption';
import LoanInfo from './components/LoanInfo';
import CustomButton from '../../components/CustomButton';
import styles from './styles';
import CustomText from '../../components/customText';

const calMonthlyPay = (loanAmount, loanTerm) => {
  if (!isFinite(loanAmount / loanTerm)) {
    return;
  }
  return (loanAmount / loanTerm).toFixed(2);
};

const init = ({loanAmount, loanTerm}) => ({
  loanAmount,
  loanTerm,
  monthlyPay: calMonthlyPay(loanAmount, loanTerm),
});

const initialState = {
  loanAmount: 16500,
  loanTerm: 16,
};

const reducer = (state, action) => {
  const {newValue} = action.payload;
  const sanitizedValue =
    typeof value === 'string' ? Number(newValue.replace(/\D/g, '')) : newValue;
  switch (action.type) {
    case 'UPDATE_LOAN_AMOUNT': {
      return {
        ...state,
        loanAmount: sanitizedValue,
        monthlyPay: calMonthlyPay(sanitizedValue, state.loanTerm),
      };
    }
    case 'UPDATE_LOAN_TERM': {
      return {
        ...state,
        loanTerm: sanitizedValue,
        monthlyPay: calMonthlyPay(state.loanAmount, sanitizedValue),
      };
    }
    default:
      throw new Error();
  }
};

export default function CreditSimulator() {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const {loanAmount, loanTerm, monthlyPay} = state;

  return (
    <View style={styles.container}>
      <CustomText style={styles.simulatorTitle}>Simulá tu crédito</CustomText>
      <View style={styles.simulatorOptionsContainer}>
        <SimulatorOption
          label="MONTO TOTAL"
          minimumValue={5000}
          maximumValue={50000}
          initialAmount={loanAmount}
          onChangeOption={newValue =>
            dispatch({type: 'UPDATE_LOAN_AMOUNT', payload: {newValue}})
          }
          currency
        />
        <SimulatorOption
          label="PLAZO"
          minimumValue={3}
          maximumValue={24}
          initialAmount={loanTerm}
          onChangeOption={newValue =>
            dispatch({type: 'UPDATE_LOAN_TERM', payload: {newValue}})
          }
        />
      </View>
      <View style={styles.loanInfoContainer}>
        <LoanInfo monthlyPay={monthlyPay} />
        <View style={styles.callToActions}>
          <CustomButton buttonText={'OBTENÉ CRÉDITO'} color={'#37AA8D'} large />
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
