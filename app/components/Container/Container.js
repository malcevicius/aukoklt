import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { FormattedWrapper } from 'react-native-globalize';

import style from './style';

const Container = ({ children }) => (
  <FormattedWrapper currency="EUR">
    <View style={style.container}>{children}</View>
  </FormattedWrapper>
);

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
