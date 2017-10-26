import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';

import style from './style';
import { RegularText } from '../Text/RegularText';
import { LargeText } from '../Text/LargeText';

class Input extends PureComponent {
  renderComponent = () => {
    if (this.props.textInput === true) {
      return (
        <View style={[style.inputContainer, style.textInput]}>
          <RegularText inputLabel text={this.props.label} />
          <TextInput
            style={style.basicInput}
            onChangeText={this.props.onChangeText}
            value={this.props.value}
            keyboardType="default"
            autoCorrect={false}
            placeholder={this.props.placeholder}
          />
        </View>
      );
    }
    if (this.props.currencyInput === true) {
      return (
        <View style={[style.inputContainer, style.currencyInput]}>
          <RegularText inputLabel text={this.props.label} />
          <View style={style.currencyInputInner}>
            <LargeText inputLabel text="€" />
            <TextInput
              style={[style.basicInput, style.currencyInputField]}
              onChangeText={this.props.onChangeText}
              value={this.props.value}
              keyboardType="number-pad"
              autoCorrect={false}
              placeholder={this.props.placeholder}
            />
          </View>
        </View>
      );
    }
    return <TextInput style={style.basicInput} autoCorrect={false} />;
  };
  render() {
    return this.renderComponent();
  }
}

Input.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  // Themes
  textInput: PropTypes.bool,
  currencyInput: PropTypes.bool,
};

export default Input;
