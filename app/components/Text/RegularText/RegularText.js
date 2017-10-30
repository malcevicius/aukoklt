import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import HTMLView from 'react-native-htmlview';

import style from './style';

class RegularText extends PureComponent {
  renderComponent = () => {
    if (this.props.stripHTML) {
      return (
        <HTMLView
          addLineBreaks={false}
          value={this.props.text}
          stylesheet={style}
          NodeComponent={Text}
        />
      );
    }
    if (this.props.inputLabel) {
      return (
        <Text
          style={[
            style.regularText,
            style.inputLabel,
            this.props.lightRed && style.lightRed,
            this.props.marginBottomBase && style.marginBottomBase,
            this.props.marginTopBase && style.marginTopBase,
            this.props.marginBottomSmall && style.marginBottomSmall,
            this.props.marginTopSmall && style.marginTopSmall,
            this.props.marginBottomTiny && style.marginBottomTiny,
            this.props.marginTopTiny && style.marginTopTiny,
          ]}
          numberOfLines={1}
        >
          {this.props.text}
        </Text>
      );
    }
    if (this.props.companyLabel) {
      return (
        <Text
          style={[
            style.regularText,
            style.companyLabel,
            this.props.lightRed && style.lightRed,
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
    if (this.props.uppercaseTitle) {
      return (
        <Text
          style={[
            style.regularText,
            style.uppercaseTitle,
            this.props.lightRed && style.lightRed,
            this.props.marginBottomBase && style.marginBottomBase,
            this.props.marginTopBase && style.marginTopBase,
            this.props.marginBottomSmall && style.marginBottomSmall,
            this.props.marginTopSmall && style.marginTopSmall,
            this.props.marginBottomTiny && style.marginBottomTiny,
            this.props.marginTopTiny && style.marginTopTiny,
          ]}
        >
          {this.props.text.toUpperCase()}
        </Text>
      );
    }
    return (
      <Text
        style={[
          style.regularText,
          this.props.sectionTitle && style.sectionTitle,
          this.props.lightRed && style.lightRed,
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
  };
  render() {
    return this.renderComponent();
  }
}

RegularText.propTypes = {
  text: PropTypes.string.isRequired,
  stripHTML: PropTypes.bool,
  inputLabel: PropTypes.bool,
  companyLabel: PropTypes.bool,
  uppercaseTitle: PropTypes.bool,
  sectionTitle: PropTypes.bool,

  // Colors
  lightRed: PropTypes.bool,

  // Margins
  marginBottomBase: PropTypes.bool,
  marginTopBase: PropTypes.bool,
  marginBottomSmall: PropTypes.bool,
  marginTopSmall: PropTypes.bool,
  marginBottomTiny: PropTypes.bool,
  marginTopTiny: PropTypes.bool,
};

export default RegularText;
