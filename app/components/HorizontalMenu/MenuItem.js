import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

import style from './style';

const MenuItem = ({ name, active }) =>
  <TouchableOpacity style={style.buttonItem} activeOpacity={0.6} focusedOpacity={1}>
    <Text style={style.buttonText}>
      {name}
    </Text>
  </TouchableOpacity>;

MenuItem.propTypes = {
  name: PropTypes.string,
  active: PropTypes.bool,
};

export default MenuItem;
