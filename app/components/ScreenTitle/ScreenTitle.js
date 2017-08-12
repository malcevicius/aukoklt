import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import style from './style';
import globalstyle from '../../config/style';

const ScreenTitle = ({ title }) => (
  <View style={style.titleContainer}>
    <Text style={globalstyle.h1}>{title}</Text>
  </View>
);

ScreenTitle.propTypes = {
  title: PropTypes.string,
};

export default ScreenTitle;
