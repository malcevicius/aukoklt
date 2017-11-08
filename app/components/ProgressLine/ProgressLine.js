import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import style from './style';

class ProgressLine extends PureComponent {
  getFilledPercentage() {
    if (this.props.goal === 0) {
      return '0%';
    }
    const x = this.props.donated / this.props.goal;
    return `${x * 100}%`;
  }
  render() {
    return (
      <View style={style.progressLine}>
        <View style={[style.activeProgressLine, { width: this.getFilledPercentage() }]} />
      </View>
    );
  }
}

ProgressLine.propTypes = {
  donated: PropTypes.number,
  goal: PropTypes.number,
};

export default ProgressLine;
