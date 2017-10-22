import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import { isSignedIn } from '../config/auth';

import Welcome from '../screens/SignedOut/Welcome';
import UserProjectList from '../screens/SignedIn/UserProjects/UserProjectList';

EStyleSheet.build({
  $backgroundColor: '#FFFFFF',
  $darkerBackgroundColor: '#F2F0F0',
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
  $large: 48,
  $xLarge: 64,
  // Text sizes
  $microText: 10,
  $smallText: 12,
  $regularText: 14,
  $largeText: 16,
  $title4: 20,
  $title3: 24,
  $title2: 28,
  $title1: 56,
});

class AukokLt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false,
    };
  }

  componentWillMount() {
    // TODO: https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert(err));
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;

    if (!checkedSignIn) {
      return null;
    } else if (!signedIn) {
      return <Welcome navigator={this.props.navigator} />;
    }
    return <UserProjectList navigator={this.props.navigator} />;
  }
}

AukokLt.navigatorStyle = {
  navBarHidden: true,
};

AukokLt.propTypes = {
  navigator: PropTypes.object,
};

export default AukokLt;
