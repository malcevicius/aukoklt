import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import HTMLView from 'react-native-htmlview';

import style from './style';

class RegularText extends PureComponent {
  renderComponent = () => {
    if (this.props.stripHTML === true) {
      return (
        <HTMLView
          addLineBreaks={false}
          value={this.props.text}
          stylesheet={style}
          NodeComponent={Text}
        />
      );
    }
    return <Text style={style.RegularText}>{this.props.text}</Text>;
  };
  render() {
    return this.renderComponent();
  }
}

RegularText.propTypes = {
  text: PropTypes.string.isRequired,
  stripHTML: PropTypes.bool,
};

export default RegularText;
