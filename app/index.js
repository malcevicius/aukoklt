import { Navigation } from 'react-native-navigation';
import { registerScreens } from './config/routes';

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'aukoklt.Main',
  },
  animationType: 'none',
});
