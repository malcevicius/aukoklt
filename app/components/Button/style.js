import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  $underlayColor: '$darkRed',
  $secondaryUnderlayColor: '$lineColor',
  $facebookUnderlayColor: '#2f4779',

  // Container options
  buttonContainer: {
    alignItems: 'flex-start',
    width: 'auto',
  },
  buttonInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  fullWidth: {
    alignItems: 'stretch',
  },
  fixedBottom: {
    alignItems: 'stretch',
    justifyContent: 'flex-end',
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
    fontSize: '$mediumText',
    fontWeight: '500',
    textAlign: 'center',
    alignSelf: 'center',
  },

  // Secondary button
  buttonSecondary: {
    backgroundColor: '$darkerBackgroundColor',
    borderRadius: 4,
  },
  textSecondary: {
    backgroundColor: 'transparent',
    color: '$superDarkRed',
  },

  // Facebook button
  facebookButton: {
    backgroundColor: '#3B5998',
  },

  // Button with icon
  iconContainer: {
    alignSelf: 'center',
    marginRight: '$tiny',
  },

  // Margins
  marginHorizontal: {
    marginHorizontal: 6,
  },
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
