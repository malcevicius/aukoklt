import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import style from './style';

import { Title2 } from '../Text/Title2';
import { RegularText } from '../Text/RegularText';
import { WizardSteps } from '../WizardSteps';

const WizardHeader = ({ step, titleText, titleDescription, marginHorizontal }) => (
  <View style={[style.headerContainer, marginHorizontal && style.marginHorizontal]}>
    <Title2 marginBottomTiny text={titleText} />
    <RegularText text={titleDescription} />
    <WizardSteps step={step} />
  </View>
);

WizardHeader.propTypes = {
  step: PropTypes.oneOf(['1', '2', '3']).isRequired,
  titleText: PropTypes.string.isRequired,
  titleDescription: PropTypes.string,
  marginHorizontal: PropTypes.bool,
};

export default WizardHeader;
