import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image } from 'react-native';

import style from './style';
import Images from '../../config/images';

const HeaderButton = ({ icon, theme, onPressAction }) => (
  <TouchableOpacity
    style={style.buttonContainer}
    activeOpacity={1}
    focusedOpacity={0.5}
    onPress={() => onPressAction()}
  >
    {icon === 'close' &&
      theme === 'dark' && <Image source={Images.close.base.dark} style={style.iconStyle} />}
    {icon === 'close' &&
      theme === 'light' && <Image source={Images.close.base.light} style={style.iconStyle} />}
    {icon === 'back' &&
      theme === 'dark' && <Image source={Images.back.base.dark} style={style.iconStyle} />}
    {icon === 'back' &&
      theme === 'light' && <Image source={Images.back.base.light} style={style.iconStyle} />}
  </TouchableOpacity>
);

HeaderButton.propTypes = {
  icon: PropTypes.oneOf(['close', 'back']).isRequired,
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  onPressAction: PropTypes.func.isRequired,
};

export default HeaderButton;
