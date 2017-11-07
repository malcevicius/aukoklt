import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Platform, AsyncStorage } from 'react-native';
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
      userData: [],
      loading: false,
      projectName: null,
      goalNumber: '',
      userProjectUrl: null,
    };

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  async componentDidMount() {
    await this.getUserData();
  }

  getUserData = async () => {
    try {
      const response = await AsyncStorage.getItem('user');
      if (response !== null) {
        const user = JSON.parse(response);
        this.setState({
          userData: user,
        });
      }
    } catch (error) {
      console.log(error);
    }
    return null;
  };

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
            accesstoken: this.state.userData.id,
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
