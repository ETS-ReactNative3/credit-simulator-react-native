import React from 'react';
import {View, TextInput} from 'react-native';
import Slider from '@react-native-community/slider';
import styles from './styles';
import CustomText from '../../../../components/customText';
import {currencyFormat} from '../../../../utils';

export default function SimulatorInput({
  label,
  minimumValue,
  maximumValue,
  inputValue,
  onChange,
  currency,
}) {
  const onChangeHandler = value => {
    const sanitizedValue =
      typeof value === 'string' ? Number(value.replace(/\D/g, '')) : value;
    if (sanitizedValue > maximumValue) {
      return;
    }
    onChange(sanitizedValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <CustomText>{label}</CustomText>
        <View style={styles.amountContainer}>
          <TextInput
            onChangeText={onChangeHandler}
            value={
              currency ? currencyFormat(inputValue, 0, '.') : `${inputValue}`
            }
            keyboardType="number-pad"
            style={styles.textInput}
          />
        </View>
      </View>
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          value={inputValue}
          step={1}
          onValueChange={onChangeHandler}
          minimumValue={minimumValue}
          maximumValue={maximumValue}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#FFFFFF"
          thumbTintColor="#FFFFFF"
        />
        <View
          style={[styles.rowContainer, !currency && {paddingHorizontal: 16}]}>
          <CustomText>
            {currency ? currencyFormat(minimumValue, 0, '.') : minimumValue}
          </CustomText>
          <CustomText>
            {currency ? currencyFormat(maximumValue, 0, '.') : maximumValue}
          </CustomText>
        </View>
      </View>
    </View>
  );
}
