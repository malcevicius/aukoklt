import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  numbersView: {
    flexDirection: 'row',
    borderRadius: 10,
    paddingVertical: 14,
    marginHorizontal: 20,
    marginTop: 16,
  },
  onTheCard: {
    alignItems: 'flex-end',
    bottom: 20,
    position: 'absolute',
  },
  darkTheme: {
    backgroundColor: 'rgba(0,0,0,0.32)',
  },
  redTheme: {
    backgroundColor: '$brandColor',
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
