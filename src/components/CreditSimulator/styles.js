import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#0E4678',
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    paddingHorizontal: 16,
  },
  simulatorTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  simulatorOptions: {
    flex: 1,
    width: '100%',
  },
  callToActions: {
    flexDirection: 'row',
    width: '100%',
  },
});
