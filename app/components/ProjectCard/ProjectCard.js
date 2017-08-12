import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import style from './style';
import globalstyle from '../../config/style';

const ProjectCard = ({ title, description }) => (
  <View style={style.card}>
    <Text style={globalstyle.h2}>{title}</Text>
    <Text style={globalstyle.text}>{description}</Text>
  </View>
);

ProjectCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ProjectCard;
