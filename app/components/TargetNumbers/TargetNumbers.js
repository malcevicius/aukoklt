import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { FormattedCurrency } from 'react-native-globalize';

import style from './style';

const TargetNumbers = ({ targetAmount, donatedAmount }) => (
  <View style={style.numbersView}>
    <View style={style.numberItem}>
      <Text style={style.transparentText}>Reikia</Text>
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
      <Text style={style.transparentText}>Surinkta</Text>
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
};

export default TargetNumbers;
