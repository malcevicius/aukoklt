import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import style from './style';

const RegularText = ({ text }) => <Text style={style.RegularText}>{text}</Text>;

RegularText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default RegularText;
