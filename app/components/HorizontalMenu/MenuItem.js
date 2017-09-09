import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

import style from './style';

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = { toggle: false };
  }

  onButtonPress = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  render() {
    return (
      <TouchableOpacity
        style={[style.buttonItem, this.state.toggle && style.buttonItemActive]}
        activeOpacity={0.8}
        focusedOpacity={1}
        onPress={this.onButtonPress}
      >
        <Text style={[style.buttonText, this.state.toggle && style.buttonTextActive]}>
          {this.props.name}
        </Text>
      </TouchableOpacity>
    );
  }
}

MenuItem.propTypes = {
  name: PropTypes.string,
};

export default MenuItem;
