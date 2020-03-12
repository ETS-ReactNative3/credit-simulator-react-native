import React from 'react';
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  base: {
    fontSize: 14,
    fontFamily: 'Montserrat',
    color: 'white',
  },
});

export default function CustomText({textProps, style, children}) {
  return (
    <Text {...textProps} style={[styles.base, style]}>
      {children}
    </Text>
  );
}
