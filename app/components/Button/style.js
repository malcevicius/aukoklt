import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  $underlayColor: '$darkRed',

  // Container options
  buttonContainer: {
    alignItems: 'flex-start',
    width: 'auto',
  },
  fullWidth: {
    alignItems: 'stretch',
  },
  fixedBottom: {
    alignItems: 'stretch',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  noBorderRadiusWhenFixed: {
    borderRadius: 0,
  },

  // Primary button
  buttonPrimary: {
    backgroundColor: '$lightRed',
    paddingVertical: '$small',
    borderRadius: '$tiny',
    paddingHorizontal: '$base',
  },
  textPrimary: {
    width: 'auto',
    color: '#FFFFFF',
    backgroundColor: 'transparent',
    fontSize: '$largeText',
    fontWeight: '600',
    textAlign: 'center',
  },

  // Secondary button
  buttonSecondary: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '$lightRed',
    borderRadius: 4,
  },
  textSecondary: {
    backgroundColor: '$lightRed',
  },

  // Additional spacing
  smallMarginTop: {
    marginTop: '$small',
  },
  smallMarginBottom: {
    marginBottom: '$small',
  },
  baseMarginTop: {
    marginTop: '$base',
  },
  baseMarginBottom: {
    marginBottom: '$base',
  },
});

export default style;
