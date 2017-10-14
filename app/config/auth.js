import { AccessToken } from 'react-native-fbsdk';

export const isSignedIn = () =>
  new Promise((resolve, reject) => {
    AccessToken.getCurrentAccessToken()
      .then((res) => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
