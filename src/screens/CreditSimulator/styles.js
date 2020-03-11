import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#0A3B67',
    alignItems: 'center',
    height: 400,
    width: 330,
    paddingHorizontal: 24,
  },
  simulatorTitle: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 24,
    width: '100%',
  },
  simulatorOptionsContainer: {
    height: 200,
    justifyContent: 'space-between',
    marginTop: 24,
    width: '100%',
  },
  loanInfoContainer: {
    marginTop: 8,
    width: '100%',
    backgroundColor: '#08355D',
  },
  callToActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
