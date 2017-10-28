import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import style from './style';
import { CurrencyNumber } from '../../CurrencyNumber';

class Title4 extends PureComponent {
  renderComponent = () => {
    if (this.props.currencyNumber === true) {
      if (this.props.number === 9999999) {
        return null;
      }
      return (
        <Text
          style={[
            style.Title4,
            style.currencyNumber,
            this.props.highlighted && style.currencyNumberHighlighted,
          ]}
        >
          <CurrencyNumber number={this.props.number} />
        </Text>
      );
    }
    return <Text style={style.Title4}>{this.props.text}</Text>;
  };
  render() {
    return this.renderComponent();
  }
}

Title4.propTypes = {
  text: PropTypes.string,
  number: PropTypes.number,
  currencyNumber: PropTypes.bool,
  highlighted: PropTypes.bool,
};

export default Title4;
