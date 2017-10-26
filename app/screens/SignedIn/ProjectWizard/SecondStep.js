import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
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
      error: null,
      projectName: null,
      goalNumber: null,
      userProjectId: '',
    };
  }

  onBackButtonPress = () => {
    this.props.navigator.pop({
      animated: true,
      animationType: 'slide-horizontal',
    });
  };

  showThirdStep = () => {
    this.props.navigator.resetTo({
      screen: 'aukoklt.ProjectWizard.ThirdStep',
      passProps: { userProjectId: this.state.userProjectId },
      animated: true,
      animationType: 'slide-horizontal',
    });
  };

  onGoalNumberInputChange(goalNumberString) {
    let cleanedString = '';
    const allowedNumbers = '0123456789';

    for (let i = 0; i < goalNumberString.length; i++) {
      // Number can't start with 0
      if (goalNumberString[0] === '0') {
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
    if (!this.state.error == null) {
      console.log(`Error found: ${this.state.error}`);
    } else if (this.state.userProjectId === '00000000-0000-0000-0000-000000000000') {
      console.log('You have already created fundraise project for this root project');
    } else if (this.state.userProjectId === '') {
      console.log('Can not connect to server: Something is wrong with a API server');
    } else {
      this.showThirdStep();
    }
  };

  createFundraiseProject = () => {
    console.log(
      `Title: ${this.state.projectName}  Goal: ${this.state.goalNumber}  SelectedProjectId: ${this
        .props.selectedProjectId}`,
    );

    this.setState({ loading: true });

    fetch('https://www.aukok.lt/api/userprojects', {
      method: 'POST',
      headers: {
        charset: 'utf-8',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        projectId: this.props.selectedProjectId,
        userId: '49697099f55942479f1eef2fa7e15b13',
        title: this.state.projectName,
        need_to_donate: this.state.goalNumber,
      }),
    })
      .then(response => response.json())
      .then((response) => {
        this.setState({
          userProjectId: response,
          error: response.error || null,
          loading: false,
        });
        this.checkResult();
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  };

  render() {
    return (
      <Container>
        <ScrollView style={globalstyle.baseHorizontalMargins}>
          <WizardHeader
            step="2"
            headerButtonIcon="back"
            onPressAction={this.onBackButtonPress}
            titleText={lang.wizard.step2.title}
            titleDescription={lang.wizard.step2.description}
          />
          <Input
            textInput
            label={lang.wizard.step2.nameFieldLabel}
            onChangeText={projectName => this.setState({ projectName })}
            value={this.state.projectName}
            placeholder={lang.wizard.step2.nameFieldPlaceholder}
          />
          <Input
            currencyInput
            label={lang.wizard.step2.goalFieldLabel}
            onChangeText={goalNumber => this.onGoalNumberInputChange(goalNumber)}
            value={this.state.goalNumber}
            placeholder={lang.wizard.step2.goalFieldPlaceholder}
          />
        </ScrollView>
        <Button textValue="Toliau" onPressAction={this.createFundraiseProject} fixedBottom />
      </Container>
    );
  }
}

SecondStep.navigatorStyle = {
  // navBarHidden: true,
};

SecondStep.propTypes = {
  selectedProjectId: PropTypes.string,
  navigator: PropTypes.object,
};

export default SecondStep;
