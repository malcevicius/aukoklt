import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  numbersView: {
    flexDirection: 'row',
    borderRadius: '$tiny',
    paddingVertical: '$small',
    marginBottom: '$base',
    backgroundColor: '$darkerBackgroundColor',
  },
  numberItem: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: '$tiny',
  },
});

export default style;
