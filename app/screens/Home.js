import React, { Component } from 'react';
import { Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { Container } from '../components/Container';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Text>I love home page!</Text>
        <Button onPress={() => navigate('ProjectScreen')} title="Go to project page" />
      </Container>
    );
  }
}

const Home = StackNavigator({
  Home: { screen: HomeScreen },
});

export default Home;
