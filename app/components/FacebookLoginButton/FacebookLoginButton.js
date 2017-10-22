import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const FBSDK = require('react-native-fbsdk');

const { LoginButton } = FBSDK;

const FacebookLoginButton = ({ onLoginFinishedAction, onLogoutFinishedAction }) => (
  <View>
    <LoginButton
      readPermissions={['email']}
      onLoginFinished={(error, result) => {
        if (error) {
          alert(`Login failed with error: ${result.error}`);
        } else if (result.isCancelled) {
          alert('Login was cancelled');
        } else {
          onLoginFinishedAction();
        }
      }}
      onLogoutFinished={() => onLogoutFinishedAction()}
    />
  </View>
);
FacebookLoginButton.propTypes = {
  onLoginFinishedAction: PropTypes.func,
  onLogoutFinishedAction: PropTypes.func,
};

export default FacebookLoginButton;
