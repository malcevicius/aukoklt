import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

import images from '../../config/images';
import lang from '../../config/lang';
import style from './style';
import { Title2 } from '../Text/Title2';
import { RegularText } from '../Text/RegularText';

const Slide = ({ illustration, slideTitle, slideDescription }) => (
  <View style={style.slideContainer}>
    <View style={style.illustrationContainer}>
      <Image style={style.illustrationImage} source={illustration} />
    </View>
    <View style={style.textContainer}>
      <Title2 marginBottomSmall text={slideTitle} />
      <RegularText marginBottomSmall text={slideDescription} />
    </View>
  </View>
);

class IntroSlider extends PureComponent {
  render() {
    return (
      <Swiper loop={false} style={style.swiperContainer} activeDotColor={'#310101'}>
        <Slide
          illustration={images.intro.firstStep}
          slideTitle={lang.welcome.intro.slide1.title}
          slideDescription={lang.welcome.intro.slide1.description}
        />
        <Slide
          illustration={images.intro.secondStep}
          slideTitle={lang.welcome.intro.slide2.title}
          slideDescription={lang.welcome.intro.slide2.description}
        />
        <Slide
          illustration={images.intro.thirdStep}
          slideTitle={lang.welcome.intro.slide3.title}
          slideDescription={lang.welcome.intro.slide3.description}
        />
      </Swiper>
    );
  }
}

Slide.propTypes = {
  illustration: PropTypes.number,
  slideTitle: PropTypes.string,
  slideDescription: PropTypes.string,
};

export default IntroSlider;
