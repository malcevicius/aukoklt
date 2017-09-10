import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FormattedWrapper } from 'react-native-globalize';

import Routes from './config/routes';

EStyleSheet.build({
  // GLOBAL COLORS
  $backgroundColor: '#fff',
  $bodyTextColor: '#808080',
  $titleTextColor: '#333333',
  $brandColor: '#B9192B',
  $borderColor: '#ededed',
});

const AukokLt = () =>
  <FormattedWrapper currency="EUR">
    <Routes />
  </FormattedWrapper>;

export default AukokLt;
