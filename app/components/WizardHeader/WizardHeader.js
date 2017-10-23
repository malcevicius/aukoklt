import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import style from './style';

import { HeaderButton } from '../HeaderButton';
import { Title2 } from '../Text/Title2';
import { RegularText } from '../Text/RegularText';
import { WizardSteps } from '../WizardSteps';

const WizardHeader = ({ step, headerButtonIcon, onPressAction, titleText, titleDescription }) => (
  <View style={style.headerContainer}>
    {(headerButtonIcon === 'none' && <View />) || (
      <HeaderButton onPressAction={onPressAction} icon={headerButtonIcon} theme="dark" />
    )}
    <Title2 text={titleText} />
    <RegularText text={titleDescription} />
    <WizardSteps step={step} />
  </View>
);

WizardHeader.propTypes = {
  step: PropTypes.oneOf(['1', '2', '3']).isRequired,
  headerButtonIcon: PropTypes.string.isRequired,
  onPressAction: PropTypes.func,
  titleText: PropTypes.string.isRequired,
  titleDescription: PropTypes.string,
};

export default WizardHeader;
