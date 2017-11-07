import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  // Container options
  buttonInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  // Primary button
  buttonPrimary: {
    backgroundColor: '$lightRed',
    paddingVertical: 12,
    borderRadius: '$tiny',
    paddingHorizontal: '$base',
  },
  textPrimary: {
    width: 'auto',
    color: '#FFFFFF',
    backgroundColor: 'transparent',
    fontSize: '$mediumText',
    fontWeight: '500',
    textAlign: 'center',
    alignSelf: 'center',
  },

  // Secondary button
  buttonSecondary: {
    backgroundColor: '$darkerBackgroundColor',
    borderRadius: 8,
  },
  textSecondary: {
    backgroundColor: 'transparent',
    color: '$superDarkRed',
  },

  // Button with icon
  iconContainer: {
    alignSelf: 'center',
    marginRight: '$tiny',
  },
});

export default style;
