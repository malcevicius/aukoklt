import EStyleSheet from 'react-native-extended-stylesheet';

const globalstyle = EStyleSheet.create({
  projectsList: {
    marginHorizontal: 18,
  },
  baseHorizontalMargins: {
    marginHorizontal: '$base',
  },
  userProjectList: {
    marginHorizontal: '$base',
  },
});

export default globalstyle;
