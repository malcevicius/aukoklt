import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  Title2: {
    fontSize: '$title2',
    color: '$superDarkRed',
    fontWeight: '700',
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
