import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  card: {
    backgroundColor: '#999',
    marginBottom: 24,
    borderRadius: 10,
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    position: 'relative',
  },
  details: {
    position: 'absolute',
    height: 370,
    top: 0,
    left: 0,
    right: 0,
  },
  imageBackground: {
    height: 370,
    borderRadius: 10,
    padding: 20,
    position: 'relative',
  },
  titleView: {
    alignItems: 'flex-start',
    margin: 20,
  },
  title: {
    color: '#fff',
    marginBottom: 8,
  },
  transparentText: {
    color: 'rgba(255,255,255,0.48)',
    fontSize: 14,
    backgroundColor: 'transparent',
  },
  numbersView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    bottom: 20,
    left: 20,
    right: 20,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.50)',
    borderRadius: 10,
    paddingVertical: 12,
  },
  numberItem: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
  numberText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
});

export default style;
