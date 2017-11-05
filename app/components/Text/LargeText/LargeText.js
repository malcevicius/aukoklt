import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import style from './style';
import { CurrencyNumber } from '../../CurrencyNumber';

class LargeText extends PureComponent {
  renderComponent = () => {
    if (this.props.currencyNumber === true) {
      if (this.props.number === 9999999) {
        return null;
      }
      return (
        <Text
          style={[
            style.largeText,
            style.currencyNumber,
            this.props.highlighted && style.currencyNumberHighlighted,
          ]}
        >
          <CurrencyNumber number={this.props.number} />
        </Text>
      );
    }
    return <Text style={style.largeText}>{this.props.text}</Text>;
  };
  render() {
    return this.renderComponent();
  }
}

LargeText.propTypes = {
  text: PropTypes.string,
  number: PropTypes.number,
  currencyNumber: PropTypes.bool,
  highlighted: PropTypes.bool,
};

export default LargeText;
