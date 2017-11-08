import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Image, View } from 'react-native';

class HandledImage extends PureComponent {
  // Handling exceptions when RN fails to load image. In that case we'll be returning empty View.
  // Possible fix for: https://github.com/facebook/react-native/issues/10553
  render() {
    if (this.props.image) {
      if (this.props.onLoad) {
        return (
          <Image
            onLoad={this.props.onLoad}
            style={this.props.style}
            source={{ uri: this.props.image }}
          />
        );
      }
      return <Image style={this.props.style} source={{ uri: this.props.image }} />;
    }
    return <View style={this.props.style} />;
  }
}

HandledImage.propTypes = {
  image: PropTypes.string,
  style: PropTypes.number,
  onLoad: PropTypes.func,
};

export default HandledImage;
