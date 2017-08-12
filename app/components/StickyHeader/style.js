import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  headerComponent: {
    height: 80,
    backgroundColor: '$backgroundColor',
    marginTop: 20,
    paddingRight: 24,
    paddingLeft: 24,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '$borderColor',
  },
});

export default style;
