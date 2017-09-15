import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import style from './style';

const TitleText = ({ light, dark, medium, large, title }) => (
  <Text
    style={[
      style.textContainer,
      light && style.lightText,
      dark && style.darkText,
      medium && style.mediumSize,
      large && style.largeSize,
    ]}
  >
    {title}
  </Text>
);

TitleText.propTypes = {
  title: PropTypes.string,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
};

export default TitleText;
