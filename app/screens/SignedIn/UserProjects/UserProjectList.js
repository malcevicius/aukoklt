import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, ScrollView, StatusBar } from 'react-native';

import { Container } from '../../../components/Container';
import { FacebookLoginButton } from '../../../components/FacebookLoginButton';
import { Button } from '../../../components/Button';

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
          <Button
            textValue="Peržiūrėti User project"
            onPressAction={this.openUserProjectView}
            smallMarginTop
            full
          />
          <Button
            textValue="Kurti naują projektą"
            onPressAction={this.openProjectWizardModal}
            smallMarginTop
          />
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
