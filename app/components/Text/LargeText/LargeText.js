import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import style from './style';

class LargeText extends PureComponent {
  renderComponent = () => <Text style={style.largeText}>{this.props.text}</Text>;
  render() {
    return this.renderComponent();
  }
}

LargeText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default LargeText;
