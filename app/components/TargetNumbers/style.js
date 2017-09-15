import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  numbersView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    bottom: 20,
    left: 20,
    right: 20,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.32)',
    borderRadius: 10,
    paddingVertical: 14,
  },
  numberItem: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
  numberText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
});

export default style;
