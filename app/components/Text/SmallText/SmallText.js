import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import style from './style';
import { CurrencyNumber } from '../../CurrencyNumber';

class SmallText extends PureComponent {
  renderComponent = () => {
    if (this.props.currencyNumber === true) {
      if (this.props.number === 9999999) {
        return null;
      }
      if (this.props.haveSeparator === true) {
        return (
          <Text
            style={[
              style.smallText,
              style.currencyNumber,
              this.props.highlighted && style.currencyNumberHighlighted,
            ]}
          >
            {' '}
            <Text> / </Text>
            <CurrencyNumber number={this.props.number} />
          </Text>
        );
      }
      return (
        <Text
          style={[
            style.smallText,
            style.currencyNumber,
            this.props.highlighted && style.currencyNumberHighlighted,
          ]}
        >
          <CurrencyNumber number={this.props.number} />
        </Text>
      );
    }
    if (this.props.uppercaseTitle) {
      return (
        <Text
          style={[
            style.smallText,
            style.uppercaseTitle,
            this.props.marginBottomBase && style.marginBottomBase,
            this.props.marginTopBase && style.marginTopBase,
            this.props.marginBottomSmall && style.marginBottomSmall,
            this.props.marginTopSmall && style.marginTopSmall,
            this.props.marginBottomTiny && style.marginBottomTiny,
            this.props.marginTopTiny && style.marginTopTiny,
          ]}
        >
          {this.props.text.toUpperCase()}
        </Text>
      );
    }
    return (
      <Text
        style={[
          style.smallText,
          this.props.marginBottomBase && style.marginBottomBase,
          this.props.marginTopBase && style.marginTopBase,
          this.props.marginBottomSmall && style.marginBottomSmall,
          this.props.marginTopSmall && style.marginTopSmall,
          this.props.marginBottomTiny && style.marginBottomTiny,
          this.props.marginTopTiny && style.marginTopTiny,
        ]}
      >
        {this.props.text}
      </Text>
    );
  };
  render() {
    return this.renderComponent();
  }
}

SmallText.propTypes = {
  text: PropTypes.string,
  number: PropTypes.number,
  currencyNumber: PropTypes.bool,
  highlighted: PropTypes.bool,
  haveSeparator: PropTypes.bool,
  uppercaseTitle: PropTypes.bool,

  // Margins
  marginBottomBase: PropTypes.bool,
  marginTopBase: PropTypes.bool,
  marginBottomSmall: PropTypes.bool,
  marginTopSmall: PropTypes.bool,
  marginBottomTiny: PropTypes.bool,
  marginTopTiny: PropTypes.bool,
};

export default SmallText;
