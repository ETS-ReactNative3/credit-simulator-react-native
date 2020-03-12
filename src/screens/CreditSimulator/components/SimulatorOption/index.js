import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Slider from '@react-native-community/slider';
import styles from './styles';
import CustomText from '../../../../components/customText';

export default function SimulatorOption({
  label,
  minimumValue,
  maximumValue,
  initialAmount,
  onChangeOption,
  currency,
}) {
  const onChangeHandler = value => {
    const sanitizedValue =
      typeof value === 'string' ? Number(value.replace(/\D/g, '')) : value;
    if (sanitizedValue > maximumValue) {
      return;
    }
    onChangeOption(sanitizedValue);
  };
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.amountContainer}>
          <TextInput
            onChangeText={onChangeHandler}
            value={currency ? `$ ${initialAmount}` : `${initialAmount}`}
            keyboardType="number-pad"
            style={styles.textInput}
          />
        </View>
      </View>
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          value={initialAmount}
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
