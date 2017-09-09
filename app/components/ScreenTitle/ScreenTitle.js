import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StatusBar } from 'react-native';

import { HorizontalMenu } from '../HorizontalMenu';

import style from './style';
import globalstyle from '../../config/style';

const ScreenTitle = ({ title, userAvatar }) =>
  <View style={style.backgroundWrapper}>
    <StatusBar backgroundColor="black" barStyle="light-content" />
    <Image
      source={require('../../images/branded_background.png')}
      style={style.brandedBackground}
    />
    <View style={style.titleContainer}>
      <Text style={[globalstyle.h1, style.titleText]}>
        {title}
      </Text>
      <Image source={{ uri: userAvatar }} style={style.avatarImage} />
    </View>
    <View style={style.categoryMenuContainer}>
      <HorizontalMenu />
    </View>
  </View>;

ScreenTitle.propTypes = {
  title: PropTypes.string,
  userAvatar: PropTypes.any,
};

export default ScreenTitle;