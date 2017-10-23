import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import style from './style';

const Title2 = ({ text }) => <Text style={style.Title2}>{text}</Text>;

Title2.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title2;
