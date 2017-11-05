import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  largeText: {
    fontSize: '$largeText',
  },
  currencyNumber: {
    color: '$lightTextColor',
    fontWeight: '600',
  },
  currencyNumberHighlighted: {
    color: '$lightRed',
    fontWeight: '600',
  },
});

export default style;
