import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  Title4: {
    fontSize: '$title4',
    color: '$lightTextColor',
    fontWeight: '600',
  },
  currencyNumber: {
    color: '$lightTextColor',
  },
  currencyNumberHighlighted: {
    color: '$lightRed',
  },
});

export default style;
