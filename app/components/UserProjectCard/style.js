import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  $underlayColor: '$darkerBackgroundColor',
  projectContainer: {
    marginTop: '$tiny',
    marginBottom: '$base',
    borderRadius: '$tiny',
    backgroundColor: '$backgroundColor',
    // shadow for card
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 16,
  },
  // Main Info
  mainInfo: {
    flexDirection: 'row',
    padding: '$small',
  },
  projectTitle: {
    flexDirection: 'column',
    flex: 1,
    marginRight: '$small',
  },
  projectThumbnail: {
    width: 80,
    height: 64,
    borderRadius: '$tiny',
    resizeMode: 'cover',
    backgroundColor: '$darkerBackgroundColor',
  },
  // Details
  progressLine: {
    height: 1,
    flex: 1,
    backgroundColor: '$lineColor',
    marginHorizontal: '$small',
  },
  activeProgressLine: {
    height: 1,
    backgroundColor: '$lightRed',
    maxWidth: '100%',
  },
  projectNumbers: {
    flexDirection: 'row',
    marginVertical: '$tiny',
  },
  numberContainer: {
    width: '50%',
    alignItems: 'center',
    padding: '$tiny',
  },
});

export default style;
