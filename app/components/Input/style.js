import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  inputContainer: {
    marginBottom: '$base',
  },
  basicInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '$lineColor',
    paddingVertical: '$small',
    color: '$superDarkRed',
    fontSize: '$largeText',
  },
});

export default style;
