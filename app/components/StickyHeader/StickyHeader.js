import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

import style from './style';
import globalstyle from '../../config/style';
import Logo from '../Logo';

const StickyHeader = ({ title }) => (
  <View style={style.headerComponent}>
    <Image style={style.logo} source={require('../../images/logo.png')} />
    <Text style={globalstyle.h2}>{title}</Text>
  </View>
);

StickyHeader.propTypes = {
  title: PropTypes.string,
};

export default StickyHeader;
