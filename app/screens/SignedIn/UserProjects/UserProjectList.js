import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, ScrollView, StatusBar, TouchableOpacity } from 'react-native';

import { Container } from '../../../components/Container';
import { FacebookLoginButton } from '../../../components/FacebookLoginButton';

class UserProjectList extends Component {
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

  openProjectWizardModal = () => {
    this.props.navigator.showModal({
      screen: 'aukoklt.ProjectWizard.FirstStep',
      animationType: 'slide-up',
    });
  };

  openUserProjectView = () => {
    this.props.navigator.push({
      screen: 'aukoklt.UserProjectView',
    });
  };

  render() {
    return (
      <Container>
        <StatusBar barStyle="dark-content" />
        <ScrollView>
          <Text>Look at my projects!</Text>
          <FacebookLoginButton
            onLoginFinishedAction={this.onLoginFinishedAction}
            onLogoutFinishedAction={this.onLogoutFinishedAction}
          />
          <TouchableOpacity activeOpacity={1} focusedOpacity={1} onPress={this.openUserProjectView}>
            <Text>Peržiūrėti User project</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            focusedOpacity={1}
            onPress={this.openProjectWizardModal}
          >
            <Text>Kurti naują projektą</Text>
          </TouchableOpacity>
        </ScrollView>
      </Container>
    );
  }
}

UserProjectList.navigatorStyle = {
  navBarHidden: true,
};

UserProjectList.propTypes = {
  navigator: PropTypes.object,
};

export default UserProjectList;
