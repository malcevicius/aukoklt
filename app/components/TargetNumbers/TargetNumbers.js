import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { FormattedCurrency } from 'react-native-globalize';

import { SemiTransparentLabel } from '../SemiTransparentLabel';

import style from './style';

const TargetNumbers = ({ dark, red, onCard, targetAmount, donatedAmount }) => (
  <View
    style={[
      style.numbersView,
      dark && style.darkTheme,
      red && style.redTheme,
      onCard && style.onTheCard,
    ]}
  >
    <View style={style.numberItem}>
      <SemiTransparentLabel light textValue="Reikia" />
      <Text style={style.numberText}>
        <FormattedCurrency
          value={targetAmount}
          currency="EUR"
          numberStyle="symbol"
          maximumFractionDigits="0"
        />
      </Text>
    </View>
    <View style={style.numberItem}>
      <SemiTransparentLabel light textValue="Surinkta" />
      <Text style={style.numberText}>
        <FormattedCurrency
          value={donatedAmount}
          currency="EUR"
          numberStyle="symbol"
          maximumFractionDigits="0"
        />
      </Text>
    </View>
  </View>
);

TargetNumbers.propTypes = {
  targetAmount: PropTypes.number,
  donatedAmount: PropTypes.number,
  dark: PropTypes.bool,
  red: PropTypes.bool,
  onCard: PropTypes.bool,
};

export default TargetNumbers;
