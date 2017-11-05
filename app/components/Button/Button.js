import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableHighlight } from 'react-native';

import style from './style';

class Button extends PureComponent {
  getUnderlayColor() {
    if (this.props.facebookButton) {
      return style.$facebookUnderlayColor;
    } else if (this.props.secondary) {
      return style.$secondaryUnderlayColor;
    }
    return style.$underlayColor;
  }
  render() {
    return (
      <View
        style={[
          style.buttonContainer,
          this.props.full && style.fullWidth,
          this.props.fixedBottom && style.fixedBottom,
        ]}
        onLayout={this.handleTextLayout}
      >
        <TouchableHighlight
          style={[
            style.buttonPrimary,
            this.props.secondary && style.buttonSecondary,
            this.props.facebookButton && style.facebookButton,
            this.props.fixedBottom && style.noBorderRadiusWhenFixed,
            this.props.marginHorizontal && style.marginHorizontal,
            this.props.smallMarginTop && style.smallMarginTop,
            this.props.smallMarginBottom && style.smallMarginBottom,
            this.props.baseMarginTop && style.baseMarginTop,
            this.props.baseMarginBottom && style.baseMarginBottom,
          ]}
          underlayColor={this.getUnderlayColor()}
          activeOpacity={1}
          onPress={this.props.onPressAction}
        >
          <Text style={[style.textPrimary, this.props.secondary && style.textSecondary]}>
            {this.props.textValue}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

Button.propTypes = {
  textValue: PropTypes.string.isRequired,
  onPressAction: PropTypes.func.isRequired,
  // Style
  secondary: PropTypes.bool,
  facebookButton: PropTypes.bool,
  // Margins
  marginHorizontal: PropTypes.bool,
  smallMarginTop: PropTypes.bool,
  smallMarginBottom: PropTypes.bool,
  baseMarginTop: PropTypes.bool,
  baseMarginBottom: PropTypes.bool,
  // Layout
  full: PropTypes.bool,
  fixedBottom: PropTypes.bool,
};

export default Button;
