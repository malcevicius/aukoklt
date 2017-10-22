import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Container } from '../../../components/Container';
import { FacebookLoginButton } from '../../../components/FacebookLoginButton';

class UserProjectList extends Component {
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
        <Text>Look at my projects!</Text>
        <FacebookLoginButton
          onLoginFinishedAction={this.onLoginFinishedAction}
          onLogoutFinishedAction={this.onLogoutFinishedAction}
        />
        <TouchableOpacity activeOpacity={1} focusedOpacity={1}>
          <Text>Peržiūrėti User project</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} focusedOpacity={1}>
          <Text>Kurti naują projektą</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default UserProjectList;
