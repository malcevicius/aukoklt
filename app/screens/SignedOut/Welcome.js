import React, { Component } from 'react';
import { Text } from 'react-native';

import { Container } from '../../components/Container';
import { FacebookLoginButton } from '../../components/FacebookLoginButton';

class Welcome extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  constructor(props) {
    super(props);
  }

  onLoginFinishedAction = () => {
    this.props.navigator.resetTo({
      screen: 'aukoklt.UserProjectList',
      title: 'User Projects',
      animated: true,
      animationType: 'fade',
    });
  };

  onLogoutFinishedAction = () => {
    this.props.navigator.resetTo({
      screen: 'aukoklt.Welcome',
      title: 'Welcome!',
      animated: true,
      animationType: 'fade',
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

export default Welcome;
