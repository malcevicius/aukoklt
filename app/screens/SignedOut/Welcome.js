import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import lang from '../../config/lang';
import { Container } from '../../components/Container';
import { Button } from '../../components/Button';
import { IntroSlider } from '../../components/IntroSlider';

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
        <IntroSlider />
        <Button
          textValue={lang.welcome.facebookButtonText}
          onPressAction={this.props.facebookLogin}
          facebookButton
          full
          fixedBottom
        />
      </Container>
    );
  }
}

Welcome.navigatorStyle = {
  navBarBackgroundColor: '#FFFFFF',
  navBarNoBorder: true,
};

Welcome.propTypes = {
  navigator: PropTypes.object,
  facebookLogin: PropTypes.func,
};

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(mapStateToProps, actions)(Welcome);
