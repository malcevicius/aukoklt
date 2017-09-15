import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, ActivityIndicator } from 'react-native';
import Swiper from 'react-native-swiper';

import style from './style';

const Slide = props => (
  <View style={style.slide}>
    <Image
      onLoad={props.loadHandle.bind(null, props.i)}
      style={style.image}
      source={{ uri: props.uri }}
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
  static propTypes = {
    imageList: PropTypes.array,
  };
  constructor(props) {
    super(props);
    this.state = {
      loadQueue: [0, 0],
    };
    console.log(this.props.imageList);
    console.log(this.state.imgList);
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

export default ImageGallery;
