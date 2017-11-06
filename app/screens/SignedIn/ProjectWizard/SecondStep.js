import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Platform } from 'react-native';
import lang from '../../../config/lang';
import globalstyle from '../../../config/globalstyle';

import { WizardHeader } from '../../../components/WizardHeader/';
import { Container } from '../../../components/Container';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';

class SecondStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      projectName: null,
      goalNumber: '',
      userProjectUrl: null,
    };

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'back') {
        this.props.navigator.pop({
          animated: true,
          animationType: 'slide-horizontal',
        });
      }
    }
  }

  showThirdStep = () => {
    this.props.navigator.resetTo({
      screen: 'aukoklt.ProjectWizard.ThirdStep',
      passProps: {
        userProjectUrl: this.state.userProjectUrl,
        onDismissFunction: this.props.onDismissFunction,
      },
      animated: true,
      animationType: 'slide-horizontal',
    });
  };

  onGoalNumberInputChange(goalNumberString) {
    let cleanedString = '';
    const allowedNumbers = '0123456789';

    for (let i = 1; i < goalNumberString.length; i++) {
      // Number can't start with 0
      if (goalNumberString[1] === '0') {
        i += 1;
      }
      // Allowing only numbers to be added
      if (allowedNumbers.indexOf(goalNumberString[i]) > -1) {
        cleanedString += goalNumberString[i];
      }
    }
    this.setState({ goalNumber: cleanedString });
  }

  checkResult = () => {
    if (this.state.userProjectUrl === null) {
      console.log('Can not connect to server: Something is wrong with a API server');
    } else {
      this.showThirdStep();
    }
  };

  useResponseToUpdateState(response) {
    this.setState(
      {
        userProjectUrl: response.userprojecturl,
        loading: false,
      },
      () => {
        this.checkResult();
      },
    );
  }

  createFundraiseProject = () => {
    const url = 'https://www.aukok.lt/api/userprojects';
    this.setState({ loading: true }, async () => {
      try {
        const res = await fetch(url, {
          method: 'POST',
          headers: {
            charset: 'utf-8',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            projectId: this.props.selectedProjectId,
            accesstoken:
              '26BDFABF0F7A428259CF94415718787B66148156176174663C8233E0DAE82DBE3873F775F005635096A8C89DB6256A2E1F2A5B3ED0932FD6C156AFE84AFC64119AD8E851F89FD5EDCF0F133F2C2F3C854DB7FAD286B12E1CFA6A5EF8B8C47B70184553DA780F5E84030FCB1C1576711D0A76A1D45BB79A853AB5BD84A2B24481FA8E0FFD41CAAC1A8D8007031AABBD938FE0E3BA5F8BB53451AE9A632DDD18F1032E91F09276666309F9CA2F1AEA9BB8C08C1D23DA8E94E7813EFF83D59FB3B6',
            title: this.state.projectName,
            need_to_donate: this.state.goalNumber,
          }),
        });
        const response = await res.json();
        this.useResponseToUpdateState(response);
      } catch (error) {
        console.log(error);
      }
    });
  };

  render() {
    const goalInputValue = `€${this.state.goalNumber}`;
    return (
      <Container>
        <ScrollView style={globalstyle.baseHorizontalMargins}>
          <WizardHeader
            step="2"
            titleText={lang.wizard.step2.title}
            titleDescription={lang.wizard.step2.description}
          />
          <Input
            label={lang.wizard.step2.nameFieldLabel}
            onChangeText={projectName => this.setState({ projectName })}
            value={this.state.projectName}
            placeholder={lang.wizard.step2.nameFieldPlaceholder}
            keyboardType="default"
          />
          <Input
            label={lang.wizard.step2.goalFieldLabel}
            onChangeText={goalNumber => this.onGoalNumberInputChange(goalNumber)}
            value={goalInputValue}
            keyboardType="number-pad"
          />
        </ScrollView>
        <Button
          textValue={lang.wizard.step2.ctaButtonText}
          onPressAction={this.createFundraiseProject}
          fixedBottom
        />
      </Container>
    );
  }
}

let navigatorStyle = {};

if (Platform.OS === 'ios') {
  navigatorStyle = {
    navBarNoBorder: true,
    navBarTransparent: true,
  };
} else {
  navigatorStyle = {};
}

SecondStep.navigatorStyle = {
  ...navigatorStyle,
};

SecondStep.propTypes = {
  selectedProjectId: PropTypes.string,
  navigator: PropTypes.object,
  onDismissFunction: PropTypes.func,
};

export default SecondStep;
