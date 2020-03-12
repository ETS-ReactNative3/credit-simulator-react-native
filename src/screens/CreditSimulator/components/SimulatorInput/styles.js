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
  sliderContainer: {
    width: '100%',
    marginTop: 8,
  },
  slider: {
    width: 280,
    color: 'white',
  },
  textInput: {
    width: 80,
    height: 34,
    borderWidth: 1,
    borderColor: '#b3c5d1',
    color: 'white',
    fontSize: 18,
    lineHeight: 2,
    textAlign: 'center',
    fontWeight: 'bold',
    textAlignVertical: 'bottom',
  },
});
