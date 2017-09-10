import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  scrollViewContainer: {
    paddingLeft: 20,
    paddingRight: 12,
    paddingVertical: 16,
  },
  buttonItem: {
    backgroundColor: 'transparent',
    marginRight: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  buttonItemActive: {
    backgroundColor: 'rgba(255,255,255,0.12)',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 14,
  },
});

export default style;
