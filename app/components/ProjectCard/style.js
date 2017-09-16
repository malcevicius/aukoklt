import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 24,
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    position: 'relative',
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'black',
    shadowRadius: 28,
    shadowOpacity: 0.36,
    elevation: 14,
  },
  details: {
    position: 'absolute',
    height: 360,
    zIndex: 20,
    top: 0,
    left: 0,
    right: 0,
  },
  imageBackground: {
    height: 360,
    borderRadius: 10,
    padding: 20,
    position: 'relative',
  },
  imageOverlay: {
    backgroundColor: 'rgba(0,0,0,0.04)',
    borderRadius: 10,
    position: 'absolute',
    zIndex: 10,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  gradientTop: {
    alignItems: 'flex-start',
    height: 160,
    borderRadius: 10,
  },
  gradientBottom: {
    alignItems: 'flex-end',
    height: 110,
    borderRadius: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  titleView: {
    alignItems: 'flex-start',
  },
});

export default style;
