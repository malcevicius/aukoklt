import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import { Container } from '../components/Container';

const SingleProject = ({ project }) =>
  <Container>
    <Text>
      {project.title}
    </Text>
  </Container>;

SingleProject.propTypes = {
  project: PropTypes.object,
};

export default SingleProject;
