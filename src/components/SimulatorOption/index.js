import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import Slider from '@react-native-community/slider';
import styles from './styles';

export default function SimulatorOption({
  label,
  minimumValue,
  maximumValue,
  initialAmount,
  onChangeOption,
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
            value={`${amount}`}
            maxLength={`${maximumValue}`.length}
            keyboardType="number-pad"
            style={styles.textInput}
          />
        </View>
      </View>
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
        <Text>{minimumValue}</Text>
        <Text>{maximumValue}</Text>
      </View>
    </View>
  );
}
