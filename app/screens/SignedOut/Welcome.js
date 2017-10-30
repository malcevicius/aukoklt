import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { Container } from '../../components/Container';
import { Button } from '../../components/Button';

class Welcome extends Component {
  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigator.resetTo({
        screen: 'aukoklt.UserProjectList',
        animated: false,
      });
    }
  }

  render() {
    return (
      <Container>
        <Text>Labas, Welcome View</Text>
        <Button
          textValue="Prisijungti su Facebook"
          onPressAction={this.props.facebookLogin}
          smallMarginTop
          full
        />
      </Container>
    );
  }
}

Welcome.navigatorStyle = {
  navBarHidden: true,
};

Welcome.propTypes = {
  navigator: PropTypes.object,
  facebookLogin: PropTypes.func,
};

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(mapStateToProps, actions)(Welcome);
