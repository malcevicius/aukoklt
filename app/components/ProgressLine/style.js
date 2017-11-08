import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  progressLine: {
    height: 1,
    flex: 1,
    backgroundColor: '$lineColor',
    marginHorizontal: '$small',
  },
  activeProgressLine: {
    height: 1,
    backgroundColor: '$lightRed',
    maxWidth: '100%',
  },
});

export default style;
