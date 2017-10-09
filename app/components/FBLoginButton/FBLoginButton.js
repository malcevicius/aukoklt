import React from 'react';
import { View } from 'react-native';

const FBSDK = require('react-native-fbsdk');

const { LoginButton, AccessToken } = FBSDK;

function getUserDataFromFacebook(token) {
  const url = `https://www.aukok.lt/api/users?accesstoken=${token}`;
  fetch(url)
    .then(response => response.json())
    .then((responseData) => {
      console.log('response object:', responseData);
      return responseData;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

const FBLoginButton = () => (
  <View>
    <LoginButton
      readPermissions={['email']}
      onLoginFinished={(error, result) => {
        if (error) {
          alert(`login has error: ${result.error}`);
        } else if (result.isCancelled) {
          alert('login is cancelled.');
        } else {
          AccessToken.getCurrentAccessToken().then((data) => {
            const user : object;
            user = getUserDataFromFacebook(data.accessToken);
            console.log(user);
          });
        }
      }}
      onLogoutFinished={() => alert('logout.')}
    />
  </View>
);

export default FBLoginButton;
