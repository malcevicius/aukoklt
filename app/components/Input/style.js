import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  inputContainer: {
    flex: 1,
    marginBottom: '$base',
    borderBottomWidth: 1,
    borderColor: '$lineColor',
  },
  basicInput: {
    height: '$large',
    color: '$superDarkRed',
    fontSize: '$largeText',
  },
  currencyInput: {
    width: '60%',
  },
  currencyInputInner: {
    flexDirection: 'row',
    height: '$large',
    alignItems: 'center',
  },
  currencyInputField: {
    marginLeft: '$tiny',
  },
});

export default style;
