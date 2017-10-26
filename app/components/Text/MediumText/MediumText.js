import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import style from './style';

class MediumText extends PureComponent {
  renderComponent = () => {
    if (this.props.projectTitle === true) {
      return (
        <Text style={[style.mediumText, style.projectTitle]} ellipsizeMode="tail" numberOfLines={2}>
          {this.props.text}
        </Text>
      );
    }
    return <Text style={style.mediumText}>{this.props.text}</Text>;
  };
  render() {
    return this.renderComponent();
  }
}

MediumText.propTypes = {
  text: PropTypes.string.isRequired,
  projectTitle: PropTypes.bool,
};

export default MediumText;
