import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  textContainer: {
    backgroundColor: 'transparent',
    marginBottom: 0,
    marginHorizontal: 20,
    marginTop: 20,
  },
  lightText: {
    color: '$lightText',
  },
  darkText: {
    color: '$darkText',
  },
  mediumSize: {
    fontSize: 24,
    fontWeight: '600',
    backgroundColor: 'transparent',
  },
  largeSize: {
    fontSize: 34,
    fontWeight: '700',
    textAlign: 'left',
    backgroundColor: 'transparent',
  },
});

export default style;
