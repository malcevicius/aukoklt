import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import Images from '../../config/images';

import style from './style';

const Step = ({ active, finished, number }) => (
  <View
    style={[style.normalCircle, active && style.activeCircle, finished && style.finishedCircle]}
  >
    {(active && <Text style={style.activeCircleText}>{number}</Text>) ||
      ((finished && <Image source={Images.checkmark.small.red} style={style.checkmarkIcon} />) || (
        <Text style={style.normalCircleText}>{number}</Text>
      ))}
  </View>
);

const Line = ({ highlighted }) => (
  <View style={[style.line, highlighted && style.highlightedLine]} />
);

const WizardSteps = ({ step }) => (
  <View style={style.componentContainer}>
    {step === '1' && (
      <View style={style.stepsContainer}>
        <Step active number="1" />
        <Line />
        <Step number="2" />
        <Line />
        <Step number="3" />
      </View>
    )}
    {step === '2' && (
      <View style={style.stepsContainer}>
        <Step finished number="1" />
        <Line highlighted />
        <Step active number="2" />
        <Line />
        <Step number="3" />
      </View>
    )}
    {step === '3' && (
      <View style={style.stepsContainer}>
        <Step finished number="1" />
        <Line highlighted />
        <Step finished number="2" />
        <Line highlighted />
        <Step active number="3" />
      </View>
    )}
  </View>
);

Step.propTypes = {
  active: PropTypes.bool,
  finished: PropTypes.bool,
  number: PropTypes.string,
};

Line.propTypes = {
  highlighted: PropTypes.bool,
};

WizardSteps.propTypes = {
  step: PropTypes.oneOf(['1', '2', '3']).isRequired,
};

export default WizardSteps;
