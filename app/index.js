import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { registerScreens } from './config/routes';

import store from './store';

registerScreens(store, Provider);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'aukoklt.Main',
  },
  animationType: 'none',
});
