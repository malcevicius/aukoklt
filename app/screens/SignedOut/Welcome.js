import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import { Container } from '../../components/Container';
import { FacebookLoginButton } from '../../components/FacebookLoginButton';

class Welcome extends Component {
  onLoginFinishedAction = () => {
    this.props.navigator.resetTo({
      screen: 'aukoklt.UserProjectList',
      title: 'User Projects',
      animated: false,
    });
  };

  onLogoutFinishedAction = () => {
    this.props.navigator.resetTo({
      screen: 'aukoklt.Welcome',
      title: 'Welcome!',
      animated: false,
    });
  };

  render() {
    return (
      <Container>
        <Text>Labas, Welcome View</Text>
        <FacebookLoginButton
          onLoginFinishedAction={this.onLoginFinishedAction}
          onLogoutFinishedAction={this.onLogoutFinishedAction}
        />
      </Container>
    );
  }
}

Welcome.navigatorStyle = {
  navBarHidden: true,
};

Welcome.propTypes = {
  navigator: PropTypes.object,
};

export default Welcome;
