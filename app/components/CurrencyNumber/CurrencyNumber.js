import React from 'react';
import PropTypes from 'prop-types';
import { FormattedCurrency } from 'react-native-globalize';

const CurrencyNumber = ({ number }) => (
  <FormattedCurrency value={number} currency="EUR" numberStyle="symbol" maximumFractionDigits="0" />
);

CurrencyNumber.propTypes = {
  number: PropTypes.number,
};

export default CurrencyNumber;
