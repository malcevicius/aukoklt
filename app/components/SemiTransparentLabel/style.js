import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  transparentText: {
    fontSize: 14,
    backgroundColor: 'transparent',
    marginHorizontal: 20,
    marginTop: 8,
  },
  lightText: {
    color: 'rgba(255,255,255,0.48)',
  },
  darkText: {
    color: 'rgba(0,0,0,0.38)',
  },
});

export default style;
