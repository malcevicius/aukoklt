import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  headerComponent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 20,
  },
  darkButton: {
    backgroundColor: 'rgba(49,1,1,0.9)',
    borderRadius: 40,
    width: 40,
    height: 40,
    marginTop: 32,
    marginLeft: 20,
  },
  lightButton: {
    backgroundColor: 'rgba(242,240,240,0.9)',
    borderRadius: 40,
    width: 40,
    height: 40,
    marginTop: 32,
    marginLeft: 20,
  },
  iconStyle: {
    width: 24,
    height: 24,
    margin: 8,
  },
});

export default style;
