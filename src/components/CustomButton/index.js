import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    flex: 1,
  },
  text: {
    textAlign: 'center',
    fontSize: 11,
  },
});

export default function CustomButton({buttonText, color, large}) {
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={[
        styles.container,
        {backgroundColor: color},
        large && {flex: 2, fontSize: 14},
      ]}>
      <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>
  );
}
