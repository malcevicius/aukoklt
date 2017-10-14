import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import { Container } from '../components/Container';
import { FacebookLoginButton } from '../components/FacebookLoginButton';

const WelcomeView = ({ navigation }) => (
  <Container>
    <Text>Labas, Welcome View</Text>
    <FacebookLoginButton navigation={navigation} />
  </Container>
);

WelcomeView.propTypes = {
  navigation: PropTypes.object,
};

export default WelcomeView;
