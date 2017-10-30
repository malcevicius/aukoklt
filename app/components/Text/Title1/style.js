import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  Title1: {
    fontSize: '$title1',
    color: '$superDarkRed',
    fontWeight: '600',
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
