import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableHighlight } from 'react-native';

import style from './style';

const Button = ({
  textValue,
  onPressAction,
  secondary,
  facebookButton,
  smallMarginTop,
  smallMarginBottom,
  baseMarginTop,
  baseMarginBottom,
  full,
  fixedBottom,
}) => (
  <View
    style={[style.buttonContainer, full && style.fullWidth, fixedBottom && style.fixedBottom]}
    onLayout={this.handleTextLayout}
  >
    <TouchableHighlight
      style={[
        style.buttonPrimary,
        secondary && style.buttonSecondary,
        facebookButton && style.facebookButton,
        fixedBottom && style.noBorderRadiusWhenFixed,
        smallMarginTop && style.smallMarginTop,
        smallMarginBottom && style.smallMarginBottom,
        baseMarginTop && style.baseMarginTop,
        baseMarginBottom && style.baseMarginBottom,
      ]}
      underlayColor={style.$underlayColor}
      activeOpacity={1}
      onPress={onPressAction}
    >
      <Text style={[style.textPrimary, secondary && style.textSecondary]}>{textValue}</Text>
    </TouchableHighlight>
  </View>
);

Button.propTypes = {
  textValue: PropTypes.string.isRequired,
  onPressAction: PropTypes.func.isRequired,
  secondary: PropTypes.bool,
  facebookButton: PropTypes.bool,
  smallMarginTop: PropTypes.bool,
  smallMarginBottom: PropTypes.bool,
  baseMarginTop: PropTypes.bool,
  baseMarginBottom: PropTypes.bool,
  full: PropTypes.bool,
  fixedBottom: PropTypes.bool,
};

export default Button;
