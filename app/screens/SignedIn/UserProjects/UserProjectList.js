import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

import { Container } from '../../../components/Container';
import { FacebookLoginButton } from '../../../components/FacebookLoginButton';

class UserProjectList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };
  render() {
    const { navigate } = this.props.navigation;
    const { state } = this.props.navigation;

    console.log(state.key);

    return (
      <Container>
        <Text>Look at my projects!</Text>
        <FacebookLoginButton />
        <TouchableOpacity
          activeOpacity={1}
          focusedOpacity={1}
          onPress={() => navigate('UserProjectView')}
        >
          <Text>Peržiūrėti User project</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          focusedOpacity={1}
          onPress={() =>
            navigate('ChooseProject', {
              rootKey: state.key,
            })}
        >
          <Text>Kurti naują projektą</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default UserProjectList;
