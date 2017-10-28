import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';

import style from './style';
import { RegularText } from '../Text/RegularText';

class TextWithTitle extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isCollapsed: true,
    };
  }

  expandView = () => {
    this.setState({ isCollapsed: false });
  };

  renderComponent = () => {
    if (this.props.collapsible) {
      return (
        <View style={[style.textWithTitle, style.collapsibleContainer]}>
          <RegularText uppercaseTitle marginBottomSmall text={this.props.title} />
          <Collapsible collapsed={this.state.isCollapsed} collapsedHeight={110} duration={300}>
            <RegularText collapsed stripHTML={this.props.stripHTML} text={this.props.text} />
          </Collapsible>
          {this.state.isCollapsed && (
            <TouchableOpacity onPress={this.expandView}>
              <RegularText marginTopTiny lightRed text="Skaityti daugiau" />
            </TouchableOpacity>
          )}
        </View>
      );
    }
    return (
      <View style={style.textWithTitle}>
        <RegularText uppercaseTitle marginBottomSmall text={this.props.title} />
        <RegularText stripHTML={this.props.stripHTML} text={this.props.text} />
      </View>
    );
  };
  render() {
    return this.renderComponent();
  }
}

TextWithTitle.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  collapsible: PropTypes.bool,
  stripHTML: PropTypes.bool,
};

export default TextWithTitle;
