import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator } from 'react-native';

import style from './style';

class Loading extends PureComponent {
  renderComponent = () => {
    if (this.props.fullScreen === true) {
      return (
        <View style={[style.loading, style.fullScreen]}>
          <ActivityIndicator animating size="large" />
        </View>
      );
    }
    return (
      <View style={style.loading}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };
  render() {
    return this.renderComponent();
  }
}

Loading.propTypes = {
  fullScreen: PropTypes.bool,
};

export default Loading;
