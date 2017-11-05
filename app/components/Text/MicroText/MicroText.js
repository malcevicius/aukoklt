import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import style from './style';

class MicroText extends PureComponent {
  renderComponent = () => {
    if (this.props.uppercaseLabel === true) {
      return (
        <Text
          style={[style.microText, style.uppercaseLabel]}
          ellipsizeMode="tail"
          numberOfLines={1}
        >
          {this.props.text.toUpperCase()}
        </Text>
      );
    }
    return <Text style={style.microText}>{this.props.text}</Text>;
  };
  render() {
    return this.renderComponent();
  }
}

MicroText.propTypes = {
  text: PropTypes.string.isRequired,
  uppercaseLabel: PropTypes.bool,
};

export default MicroText;
