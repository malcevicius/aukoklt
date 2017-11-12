import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  swiperContainer: {},
  illustrationContainer: {
    alignItems: 'flex-start',
  },
  slideContainer: {
    flex: 1,
  },
  textContainer: {
    paddingTop: '$base',
    paddingHorizontal: '$base',
  },
  illustrationImage: {
    minHeight: 280,
    maxHeight: 328,
  },
});

export default style;
