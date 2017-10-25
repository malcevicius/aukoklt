import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableHighlight } from 'react-native';

import style from './style';

const Button = ({
  // Required props:
  textValue, // Required: Button text
  onPressAction, // Required: Function with actions what when OnPress
  // Optional props:
  secondary, // If TRUE: button style will be changed to outline
  smallMarginTop, // If TRUE: 16px marginTop will be added
  smallMarginBottom, // If TRUE: 16px marginBottom will be added
  baseMarginTop, // If TRUE: 24px marginTop will be added
  baseMarginBottom, // If TRUE: 24px marginBottom will be added
  full, // If TRUE: button will be rendered with 100% width
  fixedBottom, // If True: button will be fixed to the bottom
}) => (
  <View
    style={[style.buttonContainer, full && style.fullWidth, fixedBottom && style.fixedBottom]}
    onLayout={this.handleTextLayout}
  >
    <TouchableHighlight
      style={[
        style.buttonPrimary,
        secondary && style.buttonSecondary,
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
  smallMarginTop: PropTypes.bool,
  smallMarginBottom: PropTypes.bool,
  baseMarginTop: PropTypes.bool,
  baseMarginBottom: PropTypes.bool,
  full: PropTypes.bool,
  fixedBottom: PropTypes.bool,
};

export default Button;
