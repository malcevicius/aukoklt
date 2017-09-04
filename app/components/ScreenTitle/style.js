import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    zIndex: 10,
    marginTop: 50,
    marginLeft: 20,
    marginBottom: 8,
    paddingBottom: 16,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.16)',
  },
  titleText: {
    flex: 1,
    color: '#fff',
  },
  avatarImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
    position: 'relative',
    alignItems: 'flex-end',
  },
  backgroundWrapper: {
    position: 'relative',
  },
  brandedBackground: {
    height: 700,
    padding: 20,
    position: 'absolute',
    backfaceVisibility: 'visible',
    marginHorizontal: 'auto',
    alignSelf: 'center',
    width: 'auto',
    top: -200,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  categoryMenuContainer: {
    flexDirection: 'row',
    zIndex: 10,
    backgroundColor: 'transparent',
    marginBottom: 8,
  },
});

export default style;
