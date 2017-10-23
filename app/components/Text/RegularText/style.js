import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  RegularText: {
    fontSize: '$regularText',
    color: '$normalTextColor',
    fontWeight: '400',
    marginTop: '$tiny',
    lineHeight: 20,
  },
});

export default style;
