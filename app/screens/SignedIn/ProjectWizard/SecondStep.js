import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Platform, AsyncStorage, Animated, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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
      projectName: '',
      goalNumber: '',
      userProjectUrl: '',
      buttonDisabled: true,
    };

    this.keyboardHeight = new Animated.Value(0);

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  componentWillMount() {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  async componentDidMount() {
    await this.getUserData();
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
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
      console.log(
        `There has been a problem with your asyncStorage getItem operation on SECOND STEP: ${error.message}`,
      );
      throw error;
    }
    return null;
  };

  keyboardWillShow = (event) => {
    Animated.timing(this.keyboardHeight, {
      toValue: event.endCoordinates.height,
    }).start();
  };

  keyboardWillHide = (event) => {
    Animated.timing(this.keyboardHeight, {
      toValue: 0,
    }).start();
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

  validateForm = () => {
    if (this.state.projectName.length > 2 && this.state.goalNumber.length > 1) {
      this.setState({ buttonDisabled: false });
    } else {
      this.setState({ buttonDisabled: true });
    }
  };

  onNameInputChange(projectName) {
    this.setState({ projectName }, () => {
      this.validateForm();
    });
  }

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
    this.setState({ goalNumber: cleanedString }, () => {
      this.validateForm();
    });
  }

  checkResult = () => {
    if (this.state.userProjectUrl === '') {
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
        console.log(
          `There has been a problem with your fetch operation on SECOND STEP: ${error.message}`,
        );
        throw error;
      }
    });
  };

  render() {
    const goalInputValue = `€${this.state.goalNumber}`;
    return (
      <Container>
        <KeyboardAwareScrollView
          extraScrollHeight={52}
          keyboardShouldPersistTaps="never"
          enableAutoAutomaticScroll={false}
          enableResetScrollToCoords={false}
        >
          <View style={globalstyle.baseHorizontalMargins}>
            <WizardHeader
              step="2"
              titleText={lang.wizard.step2.title}
              titleDescription={lang.wizard.step2.description}
            />
            <Input
              label={lang.wizard.step2.nameFieldLabel}
              onChangeText={projectName => this.onNameInputChange(projectName)}
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
          </View>
        </KeyboardAwareScrollView>
        <Animated.View
          style={{
            flex: 1,
            height: 48,
            width: '100%',
            bottom: this.keyboardHeight,
            left: 0,
            right: 0,
            position: 'absolute',
          }}
        >
          <Button
            textValue={lang.wizard.step2.ctaButtonText}
            onPressAction={this.createFundraiseProject}
            disabled={this.state.buttonDisabled}
            full
            noRoundCorners
          />
        </Animated.View>
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
