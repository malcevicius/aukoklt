import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { NavigationActions } from 'react-navigation';

const FBSDK = require('react-native-fbsdk');

const { LoginButton } = FBSDK;

const userSignedIn = NavigationActions.navigate({
  routeName: 'SignedIn',
  params: {},
});

const userSignedOut = NavigationActions.navigate({
  routeName: 'SignedOut',
  params: {},
});

const FacebookLoginButton = ({ navigation }) => (
  <View>
    <LoginButton
      readPermissions={['email']}
      onLoginFinished={(error, result) => {
        if (error) {
          alert(`Login failed with error: ${result.error}`);
        } else if (result.isCancelled) {
          alert('Login was cancelled');
        } else {
          navigation.dispatch(userSignedIn);
        }
      }}
      onLogoutFinished={() => navigation.dispatch(userSignedOut)}
    />
  </View>
);

FacebookLoginButton.propTypes = {
  navigation: PropTypes.object,
};

export default FacebookLoginButton;
