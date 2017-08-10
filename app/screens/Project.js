import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { Container } from '../components/Container';

class ProjectScreen extends Component {
  static navigationOptions = {
    title: 'Project',
  };
  render() {
    return (
      <Container>
        <Text>I like project page</Text>
      </Container>
    );
  }
}

const Project = StackNavigator({
  Project: { screen: ProjectScreen },
});

export default Project;
