import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, ScrollView, Platform } from 'react-native';

import images from '../../../config/images';

import { Container } from '../../../components/Container';
import { FacebookLoginButton } from '../../../components/FacebookLoginButton';
import { Button } from '../../../components/Button';

class UserProjectList extends Component {
  openProjectWizardModal = () => {
    let leftButtons = [];

    if (Platform.OS === 'ios') {
      leftButtons = [
        {
          id: 'close',
          title: 'Close',
          icon: images.navBar.close.dark,
          disableIconTint: true,
        },
      ];
    }
    this.props.navigator.showModal({
      screen: 'aukoklt.ProjectWizard.FirstStep',
      animationType: 'slide-up',
      navigatorButtons: {
        leftButtons,
      },
    });
  };

  openUserProjectView = () => {
    let leftButtons = [];

    if (Platform.OS === 'ios') {
      leftButtons = [
        {
          id: 'back',
          title: 'Back',
          icon: images.navBar.back.dark,
          disableIconTint: true,
        },
      ];
    }
    this.props.navigator.push({
      screen: 'aukoklt.UserProjectView',
      navigatorButtons: {
        leftButtons,
      },
    });
  };

  render() {
    return (
      <Container>
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

UserProjectList.propTypes = {
  navigator: PropTypes.object,
};

export default UserProjectList;
