import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import style from './style';

const SemiTransparentLabel = ({ light, dark, textValue }) => (
  <Text style={[style.transparentText, light && style.lightText, dark && style.darkText]}>
    {textValue}
  </Text>
);

SemiTransparentLabel.propTypes = {
  textValue: PropTypes.string,
  light: PropTypes.bool,
  dark: PropTypes.bool,
};

export default SemiTransparentLabel;
