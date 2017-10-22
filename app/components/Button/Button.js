import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

import style from './style';

const Button = ({ textValue, onPressAction }) => (
  <TouchableOpacity
    style={style.primaryButton}
    activeOpacity={1}
    focusedOpacity={1}
    onPress={onPressAction}
  >
    <Text style={style.buttonText}>{textValue}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  textValue: PropTypes.string.isRequired,
  onPressAction: PropTypes.func.isRequired,
};

export default Button;
