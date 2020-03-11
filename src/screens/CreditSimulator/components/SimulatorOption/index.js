import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import Slider from '@react-native-community/slider';
import styles from './styles';
import CustomText from '../../../../components/CustomText'

export default function SimulatorOption({
  label,
  minimumValue,
  maximumValue,
  initialAmount,
  onChangeOption,
  currency
}) {
  const [amount, setAmount] = useState(initialAmount);
  const onChangeHandler = value => {
    setAmount(Number(value));
    onChangeOption(amount);
  };
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.amountContainer}>
          <TextInput
            onChangeText={onChangeHandler}
            value={currency ? `$ ${amount}` : `${amount}`}
            maxLength={`${maximumValue}`.length +2}
            keyboardType="number-pad"
            style={styles.textInput}
          />
        </View>
      </View>
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          value={amount}
          step={1}
          onValueChange={onChangeHandler}
          minimumValue={minimumValue}
          maximumValue={maximumValue}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#FFFFFF"
          thumbTintColor="#FFFFFF"
        />
        <View style={styles.rowContainer}>
          <CustomText>{`$ ${minimumValue}`}</CustomText>
          <CustomText>{`$ ${maximumValue}`}</CustomText>
        </View>
      </View>
    </View>
  );
}
