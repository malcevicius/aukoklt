import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, ScrollView, View, TouchableOpacity } from 'react-native';

import { Container } from '../../../components/Container';
import { HeaderButton } from '../../../components/HeaderButton';

class UserProjectView extends Component {
  onBackButtonPress = () => {
    this.props.navigator.pop({
      animated: true,
      animationType: 'slide-horizontal',
    });
  };

  render() {
    return (
      <Container>
        <ScrollView>
          <HeaderButton onPressAction={this.onBackButtonPress} icon="back" theme="dark" />
          <Text>Sveiki, čia user project view</Text>
          <Text>{this.props.userProjectId}</Text>
          <TouchableOpacity activeOpacity={1} focusedOpacity={1} onPress={this.openUserProjectView}>
            <Text>Peržiūrėti User project</Text>
          </TouchableOpacity>
        </ScrollView>
      </Container>
    );
  }
}

UserProjectView.navigatorStyle = {
  // navBarHidden: true,
};

UserProjectView.propTypes = {
  navigator: PropTypes.object,
  userProjectId: PropTypes.string,
};

export default UserProjectView;
