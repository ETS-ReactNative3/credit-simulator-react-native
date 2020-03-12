import {StyleSheet} from 'react-native';
import {prymary, info} from '../../constans/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: prymary,
    alignItems: 'center',
    height: 400,
    width: 330,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 24,
  },
  inputsContainer: {
    height: 200,
    justifyContent: 'space-between',
    marginTop: 24,
    width: '100%',
  },
  loanInfoContainer: {
    marginTop: 8,
    width: '100%',
    backgroundColor: info,
  },
  callToActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
