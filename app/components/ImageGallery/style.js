import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const style = EStyleSheet.create({
  wrapper: {
    height: 300,
    position: 'relative',
  },
  slide: {
    flex: 1,
    height: 300,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  image: {
    width,
    height: 300,
    alignItems: 'flex-start',
    position: 'relative',
    backgroundColor: 'transparent',
  },
  loadingView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#f2f2f2',
  },
});

export default style;
