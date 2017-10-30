import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import style from './style';

class Title1 extends PureComponent {
  render() {
    return (
      <Text
        style={[
          style.Title1,
          this.props.marginBottomBase && style.marginBottomBase,
          this.props.marginTopBase && style.marginTopBase,
          this.props.marginBottomSmall && style.marginBottomSmall,
          this.props.marginTopSmall && style.marginTopSmall,
          this.props.marginBottomTiny && style.marginBottomTiny,
          this.props.marginTopTiny && style.marginTopTiny,
        ]}
      >
        {this.props.text}
      </Text>
    );
  }
}

Title1.propTypes = {
  text: PropTypes.string.isRequired,
  // Margins
  marginBottomBase: PropTypes.bool,
  marginTopBase: PropTypes.bool,
  marginBottomSmall: PropTypes.bool,
  marginTopSmall: PropTypes.bool,
  marginBottomTiny: PropTypes.bool,
  marginTopTiny: PropTypes.bool,
};

export default Title1;
