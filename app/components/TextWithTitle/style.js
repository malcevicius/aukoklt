import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  textWithTitle: {
    borderTopWidth: 1,
    borderColor: '$lightLineColor',
    paddingTop: '$base',
    marginBottom: '$base + $tiny',
  },
});

export default style;
