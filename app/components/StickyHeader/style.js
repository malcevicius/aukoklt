import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  headerComponent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 20,
  },
  backButton: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 40,
    width: 40,
    height: 40,
    marginTop: 32,
    marginLeft: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
    margin: 8,
  },
});

export default style;
