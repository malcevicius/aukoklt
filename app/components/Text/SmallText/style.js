import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  smallText: {
    fontSize: '$smallText',
    color: '$lightTextColor',
    fontWeight: '400',
  },
  currencyNumber: {
    color: '$lightTextColor',
  },
  currencyNumberHighlighted: {
    color: '$lightRed',
    fontWeight: '600',
  },
});

export default style;
