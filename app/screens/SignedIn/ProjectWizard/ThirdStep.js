import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, ScrollView, StatusBar, TouchableOpacity } from 'react-native';

import { Container } from '../../../components/Container';

class ThirdStep extends Component {
  openUserProjectView = () => {
    this.props.navigator.dismissModal({
      animationType: 'slide-down',
    });
  };

  render() {
    return (
      <Container>
        <StatusBar barStyle="dark-content" />
        <ScrollView>
          <Text>SUCCESS!!!!!</Text>
          <TouchableOpacity activeOpacity={1} focusedOpacity={1} onPress={this.openUserProjectView}>
            <Text>Mano projektai</Text>
          </TouchableOpacity>
        </ScrollView>
      </Container>
    );
  }
}

ThirdStep.navigatorStyle = {
  navBarHidden: true,
};

ThirdStep.propTypes = {
  navigator: PropTypes.object,
  userProjectId: PropTypes.string,
};

export default ThirdStep;
