import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import CustomText from '../CustomText';

const styles = StyleSheet.create({
  button: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    flex: 1,
  },
  buttonLarge: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '700',
  },
});

export default function CustomButton({buttonText, color, large}) {
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={[styles.button, {backgroundColor: color}, large && {flex: 2}]}>
      <CustomText style={[styles.buttonText, large && styles.buttonLarge]}>
        {buttonText}
      </CustomText>
    </TouchableOpacity>
  );
}
