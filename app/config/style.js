import EStyleSheet from 'react-native-extended-stylesheet';

const globalstyle = EStyleSheet.create({
  h1: {
    color: '$brandColor',
    fontSize: 40,
    fontWeight: '900',
    textAlign: 'left',
  },
  h2: {
    color: '$titleTextColor',
    fontSize: 20,
    fontWeight: '700',
  },
  description: {
    color: '$bodyTextColor',
    fontSize: 16,
    fontWeight: '400',
  },
});

export default globalstyle;
