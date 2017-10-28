import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  componentContainer: {
    marginVertical: '$small',
  },
  stepsContainer: {
    flexDirection: 'row',
  },
  stepsInnerContainer: {
    flexDirection: 'row',
  },
  // Normal state
  normalCircle: {
    width: '$base + $tiny',
    height: '$base + $tiny',
    borderRadius: '$medium',
    borderWidth: 1,
    borderColor: '$lineColor',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0,
  },
  normalCircleText: {
    backgroundColor: 'transparent',
    fontSize: '$smallText',
    color: '$superLightTextColor',
    fontWeight: '500',
  },
  line: {
    borderBottomWidth: 1,
    borderColor: '$lineColor',
    marginVertical: 16.5,
    marginHorizontal: 6,
    height: 1,
    flex: 1,
  },
  // Active state
  activeCircle: {
    borderColor: '$lightRed',
    backgroundColor: '$lightRed',
  },
  activeCircleText: {
    color: '#FFFFFF',
  },
  highlightedLine: {
    borderColor: '$lightRed',
  },
  // Finished state
  finishedCircle: {
    borderColor: '$lightRed',
    backgroundColor: 'transparent',
  },
  checkmarkIcon: {
    width: 16,
    height: 16,
  },
});

export default style;
