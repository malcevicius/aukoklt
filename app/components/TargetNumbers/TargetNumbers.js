import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import lang from '../../config/lang';

import { SmallText } from '../Text/SmallText';
import { Title4 } from '../Text/Title4';

import style from './style';

class TargetNumbers extends PureComponent {
  renderDonatedAmount = () => {
    if (this.props.targetAmount === 9999999) {
      return null;
    }
    return (
      <View style={style.numberItem}>
        <SmallText uppercaseTitle text={lang.wizard.step1.project.needToDonateLabel} />
        <Title4 number={this.props.targetAmount} currencyNumber />
      </View>
    );
  };
  render() {
    return (
      <View style={style.numbersView}>
        <View style={style.numberItem}>
          <SmallText uppercaseTitle text={lang.wizard.step1.project.donatedLabel} />
          <Title4 number={this.props.donatedAmount} currencyNumber highlighted />
        </View>
        {this.renderDonatedAmount(this.props.targetAmount)}
      </View>
    );
  }
}

TargetNumbers.propTypes = {
  targetAmount: PropTypes.number.isRequired,
  donatedAmount: PropTypes.number.isRequired,
};

export default TargetNumbers;
