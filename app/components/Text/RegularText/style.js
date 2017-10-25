import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  RegularText: {
    fontSize: '$regularText',
    color: '$normalTextColor',
    fontWeight: '400',
    marginTop: '$tiny',
    lineHeight: 20,
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
});

export default style;
