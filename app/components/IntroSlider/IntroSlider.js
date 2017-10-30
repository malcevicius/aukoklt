import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';

import lang from '../../config/lang';
import style from './style';
import { Title1 } from '../Text/Title1';
import { MediumText } from '../Text/MediumText';

const Slide = ({ illustration, slideTitle, slideDescription }) => (
  <View style={style.slideContainer}>
    <View style={style.illustrationContainer} />
    <View style={style.textContainer}>
      <Title1 marginBottomSmall text={slideTitle} />
      <MediumText marginBottomSmall text={slideDescription} />
    </View>
  </View>
);

class IntroSlider extends PureComponent {
  render() {
    return (
      <Swiper loop={false} style={style.swiperContainer} activeDotColor={'#310101'}>
        <Slide
          slideTitle={lang.welcome.intro.slide1.title}
          slideDescription={lang.welcome.intro.slide1.description}
        />
        <Slide
          slideTitle={lang.welcome.intro.slide2.title}
          slideDescription={lang.welcome.intro.slide2.description}
        />
        <Slide
          slideTitle={lang.welcome.intro.slide3.title}
          slideDescription={lang.welcome.intro.slide3.description}
        />
      </Swiper>
    );
  }
}

Slide.propTypes = {
  illustration: PropTypes.string,
  slideTitle: PropTypes.string,
  slideDescription: PropTypes.string,
};

export default IntroSlider;
