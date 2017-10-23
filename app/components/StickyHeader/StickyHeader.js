import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Image } from 'react-native';

import style from './style';
import Images from '../../config/images';

const StickyHeader = ({ closeIcon, backIcon, light, dark, onPressAction }) => (
  <View style={style.headerComponent}>
    <TouchableOpacity
      style={[light && style.lightButton, dark && style.darkButton]}
      activeOpacity={1}
      focusedOpacity={1}
      onPress={() => onPressAction()}
    >
      {closeIcon && light && <Image source={Images.close.base.dark} style={style.iconStyle} />}
      {closeIcon && dark && <Image source={Images.close.base.light} style={style.iconStyle} />}
      {backIcon && light && <Image source={Images.back.base.dark} style={style.iconStyle} />}
      {backIcon && dark && <Image source={Images.back.base.light} style={style.iconStyle} />}
    </TouchableOpacity>
  </View>
);

StickyHeader.propTypes = {
  closeIcon: PropTypes.bool,
  backIcon: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  onPressAction: PropTypes.func.isRequired,
};

export default StickyHeader;
