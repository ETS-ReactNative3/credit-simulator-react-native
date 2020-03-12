import React from 'react';
import {View, StyleSheet, StatusBar, ScrollView} from 'react-native';
import {CreditSimulator} from './screens';
import {secondary} from './constans/colors';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <CreditSimulator />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
    backgroundColor: secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
