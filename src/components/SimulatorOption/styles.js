import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  label: {
    color: 'white',
  },
  slider: {
    width: 200,
    height: 40,
    color: 'white',
  },
  textInput: {
    width: 80,
    height: 34,
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    fontSize: 14,
  },
});
