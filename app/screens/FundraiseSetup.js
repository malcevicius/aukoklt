import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';

import { Container } from '../components/Container';

export default class FundraiseSetup extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '', placeholder: 'Įrašykite pavadinimą...' };
  }

  render() {
    return (
      <Container>
        <Text>Sveiki - Fundraise Setup</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          defaultValue={this.state.placeholder}
          keyboardType={'default'}
        />
      </Container>
    );
  }
}
