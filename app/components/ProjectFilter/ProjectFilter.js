import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import style from './style';

class ProjectFilter extends PureComponent {
  getButtonStyles() {
    return [style.buttonPrimary, this.props.secondary && style.buttonSecondary];
  }

  getButtonTextStyles() {
    return [style.textPrimary, this.props.secondary && style.textSecondary];
  }

  renderComponent = () => (
    <View style={this.getButtonStyles()}>
      <View style={style.buttonInnerContainer}>
        <View style={style.iconContainer}>
          <Icon name={this.props.icon} size={24} color={this.props.iconColor} />
        </View>
        <Text style={this.getButtonTextStyles()}>
          {this.props.activeCategory.charAt(0).toUpperCase() +
            this.props.activeCategory
              .slice(1)
              .toString()
              .toLowerCase()}
        </Text>
      </View>
    </View>
  );
  render() {
    return this.renderComponent();
  }
}

ProjectFilter.propTypes = {
  activeCategory: PropTypes.string.isRequired,
  // Style
  secondary: PropTypes.bool,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
};

export default ProjectFilter;
