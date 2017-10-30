import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, ScrollView, Platform, AsyncStorage } from 'react-native';

import images from '../../../config/images';
import lang from '../../../config/lang';

import { Container } from '../../../components/Container';
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

  onLogoutAction = () => {
    AsyncStorage.removeItem('fb_token');
    this.props.navigator.resetTo({
      screen: 'aukoklt.Welcome',
      animated: false,
    });
  };

  render() {
    return (
      <Container>
        <ScrollView>
          <Text>Look at my projects!</Text>
          <Button textValue={lang.user.logout} onPressAction={this.onLogoutAction} smallMarginTop />
          <Button
            textValue="Peržiūrėti user project"
            onPressAction={this.openUserProjectView}
            smallMarginTop
          />
          <Button
            textValue={lang.user.createProject}
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
