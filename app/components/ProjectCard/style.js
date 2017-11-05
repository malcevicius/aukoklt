import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  projectContainer: {
    marginTop: '$tiny',
    marginBottom: '$base',
    flex: 1,
    width: '50%',
    marginHorizontal: 6,
  },
  thumbnailImage: {
    width: '100%',
    height: 100,
    borderRadius: 3,
    resizeMode: 'cover',
    backgroundColor: '$darkerBackgroundColor',
    marginBottom: '$tiny',
  },
  projectNumbers: {
    flexDirection: 'row',
    marginTop: 4,
  },
});

export default style;
