import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, ScrollView } from 'react-native';
import { isSignedIn } from '../../../config/auth';

import { Container } from '../../../components/Container';
import { FacebookLoginButton } from '../../../components/FacebookLoginButton';
import { Button } from '../../../components/Button';

class UserProjectList extends Component {
  // FIXME: These checks isSignedIn not working yet. Needs more investigation
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false,
    };
  }

  componentWillMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert(err));
  }

  resetToWelcomeScreen = () => {
    this.props.navigator.resetTo({
      screen: 'aukoklt.Welcome',
      animated: false,
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
    const { checkedSignIn, signedIn } = this.state;

    if (!checkedSignIn) {
      return null;
    } else if (!signedIn) {
      return this.resetToWelcomeScreen;
    }
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

UserProjectList.navigatorStyle = {
  // navBarHidden: true,
};

UserProjectList.propTypes = {
  navigator: PropTypes.object,
};

export default UserProjectList;
