import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native';

import { Container } from '../components/Container';

export default class FundraiseSetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: '',
      goalNumber: '',
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
  createFundraiseProject = () => {
    console.log(`Title: ${this.state.projectName}  Goal: ${this.state.goalNumber}`);
  };

  render() {
    return (
      <Container>
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
        <TouchableOpacity onPress={this.createFundraiseProject}>
          <Text>Patvirtinti</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}
