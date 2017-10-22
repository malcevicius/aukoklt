import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FormattedWrapper } from 'react-native-globalize';
import { isSignedIn } from '../config/auth';

import Welcome from '../screens/SignedOut/Welcome';
import UserProjectList from '../screens/SignedIn/UserProjects/UserProjectList';

EStyleSheet.build({
  // GLOBAL COLORS
  $backgroundColor: '#fff',
  $lightText: '#FFFFFF',
  $darkText: '#333333',
  $bodyTextColor: '#808080',
  $titleTextColor: '#333333',
  $brandColor: '#B9192B',
  $borderColor: '#ededed',
});

export default class AukokLt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false,
    };
  }

  componentWillMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert(err));
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;

    // If we haven't checked AsyncStorage yet, don't render anything. Better ways to do this...
    if (!checkedSignIn) {
      return null;
    } else if (!signedIn) {
      return (
        <FormattedWrapper currency="EUR">
          <Welcome navigator={this.props.navigator} />
        </FormattedWrapper>
      );
    }
    return (
      <FormattedWrapper currency="EUR">
        <UserProjectList navigator={this.props.navigator} />
      </FormattedWrapper>
    );
  }
}
