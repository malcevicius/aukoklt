import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, ScrollView } from 'react-native';

import { Container } from '../../../components/Container';

class UserProjectView extends Component {
  constructor(props) {
    super(props);

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'back') {
        this.props.navigator.pop({
          animated: true,
          animationType: 'slide-horizontal',
        });
      }
    }
  }

  render() {
    return (
      <Container>
        <ScrollView>
          <Text>Sveiki, čia user project view</Text>
          <Text>{this.props.userProjectId}</Text>
        </ScrollView>
      </Container>
    );
  }
}

UserProjectView.propTypes = {
  navigator: PropTypes.object,
  userProjectId: PropTypes.string,
};

export default UserProjectView;
