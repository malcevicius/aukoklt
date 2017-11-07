import { AsyncStorage } from 'react-native';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from './types';

const authenticateWithServer = async (dispatch, token) => {
  const url = `https://www.aukok.lt/api/users?accesstoken=${token}`;
  try {
    const res = await fetch(url);
    const response = await res.json();
    await AsyncStorage.setItem('user', JSON.stringify(response));
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } catch (error) {
    dispatch({ type: FACEBOOK_LOGIN_FAIL });
    console.log(`There has been a problem with your fetch operation: ${error.message}`);
    throw error;
  }
  return null;
};

const doFacebookLogin = async (dispatch) => {
  try {
    const { isCancelled } = await LoginManager.logInWithReadPermissions([
      'public_profile',
      'email',
    ]);

    if (!isCancelled) {
      const data = await AccessToken.getCurrentAccessToken();
      const token = data.accessToken.toString();
      await AsyncStorage.setItem('fb_token', token);
      authenticateWithServer(dispatch, token);
    } else {
      return dispatch({ type: FACEBOOK_LOGIN_FAIL });
    }
  } catch (error) {
    console.log(`Login failed with error: ${error}`);
    throw error;
  }
  return null;
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
