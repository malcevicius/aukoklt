import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  textWithTitle: {
    borderTopWidth: 1,
    borderColor: '$lineColor',
    paddingTop: '$base',
    marginBottom: '$base + $tiny',
  },
});

export default style;
