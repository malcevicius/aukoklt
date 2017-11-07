import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    marginBottom: '$small',
  },
  headerLeft: {
    flex: 1,
    alignItems: 'flex-start',
  },
  headerRight: {
    width: 32,
    alignItems: 'flex-end',
  },
  userThumbnail: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignSelf: 'flex-end',
    backgroundColor: '$lineColor',
  },

  // Margin options
  marginHorizontal: {
    marginHorizontal: 6,
  },
});

export default style;
