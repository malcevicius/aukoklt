import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator } from 'react-native';
import Swiper from 'react-native-swiper';

import style from './style';
import { HandledImage } from '../HandledImage';

const Slide = props => (
  <View style={style.slide}>
    <HandledImage
      image={props.uri}
      style={style.image}
      onLoad={props.loadHandle.bind(null, props.i)}
    />
    {!props.loaded && (
      <View style={style.loadingView}>
        <ActivityIndicator animating size="large" />
      </View>
    )}
  </View>
);

Slide.propTypes = {
  loaded: PropTypes.bool,
  loadHandle: PropTypes.any,
  uri: PropTypes.string,
  i: PropTypes.number,
};

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadQueue: [0],
    };
    this.loadHandle = this.loadHandle.bind(this);
  }
  loadHandle(i) {
    const loadQueue = this.state.loadQueue;
    loadQueue[i] = 1;
    this.setState({
      loadQueue,
    });
  }
  render() {
    return (
      <View style={style.wrapper}>
        <Swiper
          height={300}
          loadMinimal
          loadMinimalSize={1}
          loop={false}
          activeDotColor={'#ffffff'}
        >
          {this.props.imageList.map((photo, i) => (
            <Slide
              loadHandle={this.loadHandle}
              loaded={!!this.state.loadQueue[i]}
              uri={photo.url}
              i={i}
              key={i}
            />
          ))}
        </Swiper>
      </View>
    );
  }
}

ImageGallery.propTypes = {
  imageList: PropTypes.array,
};

export default ImageGallery;
