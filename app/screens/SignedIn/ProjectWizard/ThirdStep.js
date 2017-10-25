import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, ScrollView } from 'react-native';

import lang from '../../../config/lang';

import { WizardHeader } from '../../../components/WizardHeader/';
import { Container } from '../../../components/Container';
import { Button } from '../../../components/Button';

class ThirdStep extends Component {
  openUserProjectView = () => {
    this.props.navigator.dismissModal({
      animationType: 'slide-down',
    });
  };

  render() {
    return (
      <Container>
        <ScrollView>
          <WizardHeader
            step="3"
            headerButtonIcon="none"
            titleText={lang.wizard.step3.title}
            titleDescription={lang.wizard.step3.description}
          />
          <Text>{lang.wizard.step3.title}</Text>
          <Button
            textValue={lang.wizard.step3.showProjectsBtn}
            onPressAction={this.openUserProjectView}
            smallMarginTop
          />
        </ScrollView>
      </Container>
    );
  }
}

ThirdStep.navigatorStyle = {
  // navBarHidden: true,
};

ThirdStep.propTypes = {
  navigator: PropTypes.object,
  userProjectId: PropTypes.string,
};

export default ThirdStep;
