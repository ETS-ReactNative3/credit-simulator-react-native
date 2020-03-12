import React, {useReducer} from 'react';
import {View} from 'react-native';
import SimulatorInput from './components/SimulatorInput';
import LoanInfo from './components/LoanInfo';
import CustomButton from '../../components/CustomButton';
import styles from './styles';
import CustomText from '../../components/customText';
import Divider from '../..//components/Divider';
import {success, accent} from '../../constans/colors';

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
  loanAmount: 19500,
  loanTerm: 16,
};

const reducer = (state, action) => {
  const {newValue} = action.payload;
  const sanitizedNewValue =
    typeof value === 'string' ? Number(newValue.replace(/\D/g, '')) : newValue;
  switch (action.type) {
    case 'UPDATE_LOAN_AMOUNT': {
      return {
        ...state,
        loanAmount: sanitizedNewValue,
        monthlyPay: calMonthlyPay(sanitizedNewValue, state.loanTerm),
      };
    }
    case 'UPDATE_LOAN_TERM': {
      return {
        ...state,
        loanTerm: sanitizedNewValue,
        monthlyPay: calMonthlyPay(state.loanAmount, sanitizedNewValue),
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
      <CustomText style={styles.title}>Simulá tu crédito</CustomText>
      <View style={styles.inputsContainer}>
        <SimulatorInput
          label="MONTO TOTAL"
          minimumValue={5000}
          maximumValue={50000}
          inputValue={loanAmount}
          onChange={newValue =>
            dispatch({type: 'UPDATE_LOAN_AMOUNT', payload: {newValue}})
          }
          currency
        />
        <SimulatorInput
          label="PLAZO"
          minimumValue={3}
          maximumValue={24}
          inputValue={loanTerm}
          onChange={newValue =>
            dispatch({type: 'UPDATE_LOAN_TERM', payload: {newValue}})
          }
        />
      </View>
      <View style={styles.loanInfoContainer}>
        <LoanInfo monthlyPay={monthlyPay} />
        <View style={styles.callToActions}>
          <CustomButton buttonText={'OBTENÉ CRÉDITO'} color={success} large />
          <Divider width={8} />
          <CustomButton buttonText={'VER DETALLE DE \nCUOTAS'} color={accent} />
        </View>
      </View>
    </View>
  );
}
