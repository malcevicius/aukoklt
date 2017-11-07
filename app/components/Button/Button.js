import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import style from './style';

class Button extends PureComponent {
  getButtonContainerStyles() {
    return [
      style.buttonContainer,
      this.props.full && style.fullWidth,
      this.props.fixedBottom && style.fixedBottom,
    ];
  }

  getButtonStyles() {
    return [
      style.buttonPrimary,
      this.props.secondary && style.buttonSecondary,
      this.props.facebookButton && style.facebookButton,
      this.props.fixedBottom && style.noBorderRadiusWhenFixed,
      this.props.marginHorizontal && style.marginHorizontal,
      this.props.smallMarginTop && style.smallMarginTop,
      this.props.smallMarginBottom && style.smallMarginBottom,
      this.props.baseMarginTop && style.baseMarginTop,
      this.props.baseMarginBottom && style.baseMarginBottom,
    ];
  }

  getButtonTextStyles() {
    return [style.textPrimary, this.props.secondary && style.textSecondary];
  }

  getUnderlayColor() {
    if (this.props.facebookButton) {
      return style.$facebookUnderlayColor;
    } else if (this.props.secondary) {
      return style.$secondaryUnderlayColor;
    }
    return style.$underlayColor;
  }

  renderComponent = () => {
    if (this.props.icon !== undefined) {
      return (
        <View style={this.getButtonContainerStyles()}>
          <TouchableHighlight
            style={this.getButtonStyles()}
            underlayColor={this.getUnderlayColor()}
            activeOpacity={1}
            onPress={this.props.onPressAction}
          >
            <View style={style.buttonInnerContainer}>
              <View style={style.iconContainer}>
                <Icon name={this.props.icon} size={24} color={this.props.iconColor} />
              </View>
              <Text style={this.getButtonTextStyles()}>{this.props.textValue}</Text>
            </View>
          </TouchableHighlight>
        </View>
      );
    }
    return (
      <View style={this.getButtonContainerStyles()}>
        <TouchableHighlight
          style={this.getButtonStyles()}
          underlayColor={this.getUnderlayColor()}
          activeOpacity={1}
          onPress={this.props.onPressAction}
        >
          <Text style={this.getButtonTextStyles()}>{this.props.textValue}</Text>
        </TouchableHighlight>
      </View>
    );
  };
  render() {
    return this.renderComponent();
  }
}

Button.propTypes = {
  textValue: PropTypes.string.isRequired,
  onPressAction: PropTypes.func,
  // Style
  secondary: PropTypes.bool,
  facebookButton: PropTypes.bool,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
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
