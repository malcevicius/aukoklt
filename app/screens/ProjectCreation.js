import React from 'react';
import { Text } from 'react-native';

import { Container } from '../components/Container';
import { FBLoginButton } from '../components/FBLoginButton';

const ProjectCreation = () => (
  <Container>
    <Text>Sveiki atvykę! Prisijunkite</Text>
    <FBLoginButton />
  </Container>
);

export default ProjectCreation;
