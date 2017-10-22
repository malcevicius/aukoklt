import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, ScrollView, StatusBar, TouchableOpacity } from 'react-native';

import { Container } from '../../../components/Container';
import { StickyHeader } from '../../../components/StickyHeader';

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
        <StatusBar barStyle="dark-content" />
        <StickyHeader backIcon dark onPressAction={this.onBackButtonPress} />
        <ScrollView>
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
  navBarHidden: true,
};

UserProjectView.propTypes = {
  navigator: PropTypes.object,
  userProjectId: PropTypes.string,
};

export default UserProjectView;
