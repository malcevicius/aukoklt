import React, { Component } from 'react';
import { PixelRatio, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

import Welcome from '../screens/SignedOut/Welcome';
import { Loading } from '../components/Loading';

const pixelRatio = PixelRatio.get();

const scaleFontSize = (size) => {
  if (pixelRatio === 2) {
    return size * 1.15;
  }
  if (pixelRatio === 3) {
    return size * 1.35;
  }
  return size * pixelRatio;
};

EStyleSheet.build({
  $backgroundColor: '#FFFFFF',
  $darkerBackgroundColor: '#F8F5F5',
  $lightLineColor: '#F2F0F0',
  $lineColor: '#E3DCDC',
  // Text colors
  $superLightTextColor: '#C0B6B6',
  $lightTextColor: '#9B9090',
  $normalTextColor: '#827878',
  // Our reds
  $lightRed: '#E71E35',
  $brandRed: '#B9192B',
  $darkRed: '#A10F20',
  $darkerRed: '#530303',
  $superDarkRed: '#310101',
  // Spacing
  $tiny: 8,
  $small: 16,
  $base: 24,
  $medium: 48,
  $large: 64,
  // Text sizes
  $microText: 10,
  $smallText: 12,
  $regularText: 14,
  $mediumText: 16,
  $largeText: 18,
  $title4: 20,
  $title3: 24,
  $title2: 28,
  $title1: 36,
  // $microText: scaleFontSize(10),
  // $smallText: scaleFontSize(12),
  // $regularText: scaleFontSize(14),
  // $mediumText: scaleFontSize(16),
  // $largeText: scaleFontSize(18),
  // $title4: scaleFontSize(20),
  // $title3: scaleFontSize(24),
  // $title2: scaleFontSize(28),
  // $title1: scaleFontSize(36),
});

class AukokLt extends Component {
  constructor(props) {
    super(props);

    this.state = { token: null };
  }

  async componentWillMount() {
    const token = await AsyncStorage.getItem('fb_token');
    if (token) {
      this.props.navigator.resetTo({
        screen: 'aukoklt.UserProjectList',
        animated: false,
      });
    } else {
      this.setState({ token: false });
    }
  }

  render() {
    if (this.state.token === null) {
      return <Loading fullScreen />;
    }
    return <Welcome navigator={this.props.navigator} />;
  }
}

AukokLt.navigatorStyle = {
  navBarHidden: true,
  statusBarHidden: true,
  drawUnderNavBar: true,
  statusBarTextColorSchemeSingleScreen: 'light',
};

AukokLt.propTypes = {
  navigator: PropTypes.object,
};

export default AukokLt;
