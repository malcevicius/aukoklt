import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TextInput, TouchableOpacity } from 'react-native';

import { Container } from '../../../components/Container';
import { StickyHeader } from '../../../components/StickyHeader';

class SecondStep extends Component {
  static propTypes = {
    selectedProjectId: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      projectName: '',
      goalNumber: '',
      userProjectId: '',
      errorProjectNameField: true,
      errorGoalNumberField: false,
    };
  }

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

  validateFormFields = () => {};

  render() {
    return (
      <Container>
        <StickyHeader />
        <Text>Sveiki - Fundraise Setup</Text>
        <Text>Įrašykite pavadinima</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={projectName => this.setState({ projectName })}
          value={this.state.projectName}
          defaultValue={this.state.placeholder}
          keyboardType={'default'}
          autoCorrect={false}
        />

        <Text>Įrašykite sumą</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          keyboardType={'numeric'}
          onChangeText={goalNumber => this.onGoalNumberInputChange(goalNumber)}
          value={this.state.goalNumber}
          autoCorrect={false}
        />
        <TouchableOpacity>
          <Text>Patvirtinti</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default SecondStep;
