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
  uppercaseTitle: {
    color: '$lightTextColor',
    fontWeight: '500',
  },

  // Margin options
  marginBottomBase: {
    marginBottom: '$base',
  },
  marginTopBase: {
    marginTop: '$base',
  },
  marginBottomSmall: {
    marginBottom: '$small',
  },
  marginTopSmall: {
    marginTop: '$small',
  },
  marginBottomTiny: {
    marginBottom: '$tiny',
  },
  marginTopTiny: {
    marginTop: '$tiny',
  },
});

export default style;
