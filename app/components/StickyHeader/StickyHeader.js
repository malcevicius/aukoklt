import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Image } from 'react-native';

import style from './style';
import globalstyle from '../../config/style';

const StickyHeader = ({ navigation }) => (
  <View style={style.headerComponent}>
    <TouchableOpacity
      style={style.backButton}
      activeOpacity={1}
      focusedOpacity={1}
      onPress={() => navigation.goBack(null)}
    >
      <Image source={require('../../images/back_icon_light_24.png')} style={style.backIcon} />
    </TouchableOpacity>
  </View>
);

StickyHeader.propTypes = {
  navigation: PropTypes.object,
};

export default StickyHeader;
