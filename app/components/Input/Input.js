import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';

import style from './style';
import { RegularText } from '../Text/RegularText';

class Input extends PureComponent {
  renderComponent = () => (
    <View style={[style.inputContainer, style.textInput]}>
      <RegularText inputLabel text={this.props.label} />
      <TextInput
        style={style.basicInput}
        onChangeText={this.props.onChangeText}
        value={this.props.value}
        keyboardType={this.props.keyboardType}
        autoCorrect={false}
        placeholder={this.props.placeholder}
        // ios only
        clearButtonMode={'while-editing'}
      />
    </View>
  );
  render() {
    return this.renderComponent();
  }
}

Input.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
};

export default Input;
