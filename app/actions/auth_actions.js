import { AsyncStorage } from 'react-native';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from './types';

const doFacebookLogin = async (dispatch) => {
  const { isCancelled } = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);

  if (!isCancelled) {
    const data = await AccessToken.getCurrentAccessToken();
    const token = data.accessToken.toString();
    await AsyncStorage.setItem('fb_token', token);
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } else {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }
};

export const facebookLogin = () => async (dispatch) => {
  const token = await AsyncStorage.getItem('fb_token');

  if (token) {
    // Dispatch an action saying FB login is done
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } else {
    // Start up FB login process
    doFacebookLogin(dispatch);
  }
};
