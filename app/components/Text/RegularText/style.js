import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  regularText: {
    fontSize: '$regularText',
    color: '$normalTextColor',
    fontWeight: '400',
    lineHeight: 20,
  },
  inputLabel: {
    color: '$lightTextColor',
  },
  companyLabel: {
    color: '$lightTextColor',
  },
  uppercaseTitle: {
    color: '$superLightTextColor',
    fontWeight: '500',
  },
  p: {
    fontSize: '$regularText',
    color: '$normalTextColor',
    fontWeight: '400',
    lineHeight: 22,
    margin: 0,
    padding: 0,
  },
  b: {
    fontWeight: '700',
  },

  // Color options
  lightRed: {
    color: '$lightRed',
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
