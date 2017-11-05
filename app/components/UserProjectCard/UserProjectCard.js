import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, View, Image, Platform } from 'react-native';

import images from '../../config/images';
import style from './style';
import lang from '../../config/lang';

import { MicroText } from '../Text/MicroText';
import { SmallText } from '../Text/SmallText';
import { MediumText } from '../Text/MediumText';
import { LargeText } from '../Text/LargeText';

class ProgressLine extends PureComponent {
  getFilledPercentage() {
    if (this.props.goal === 0) {
      return '0%';
    }
    const x = this.props.donated / this.props.goal;
    return `${x * 100}%`;
  }
  render() {
    return (
      <View style={style.progressLine}>
        <View style={[style.activeProgressLine, { width: this.getFilledPercentage() }]} />
      </View>
    );
  }
}

class UserProjectCard extends PureComponent {
  onPressAction = () => {
    let leftButtons = [];

    if (Platform.OS === 'ios') {
      leftButtons = [
        {
          id: 'back',
          title: 'Back',
          icon: images.navBar.back.light,
          disableIconTint: true,
        },
      ];
    }
    this.props.navigator.push({
      screen: this.props.navigateTo,
      passProps: { projectInfo: this.props.projectInfo },
      navigatorButtons: {
        leftButtons,
      },
    });
  };

  render() {
    return (
      <TouchableHighlight
        onPress={this.onPressAction}
        style={style.projectContainer}
        underlayColor={style.$underlayColor}
        activeOpacity={1}
      >
        <View>
          <View style={style.mainInfo}>
            <View style={style.projectTitle}>
              <MicroText uppercaseLabel text={this.props.projectInfo.projectTitle} />
              <MediumText projectTitle text={this.props.projectInfo.title} />
            </View>
            <Image
              style={style.projectThumbnail}
              source={{ uri: this.props.projectInfo.img, cache: 'force-cache' }}
            />
          </View>
          <View style={style.details}>
            <ProgressLine
              donated={this.props.projectInfo.donated}
              goal={this.props.projectInfo.need_to_donate}
            />
            <View style={style.projectNumbers}>
              <View style={style.numberContainer}>
                <SmallText text={lang.global.donatedLabel} />
                <LargeText currencyNumber highlighted number={this.props.projectInfo.donated} />
              </View>
              <View style={style.numberContainer}>
                <SmallText text={lang.global.needToDonateLabel} />
                <LargeText currencyNumber number={this.props.projectInfo.need_to_donate} />
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

ProgressLine.propTypes = {
  donated: PropTypes.number,
  goal: PropTypes.number,
};

UserProjectCard.propTypes = {
  projectInfo: PropTypes.object.isRequired,
  navigator: PropTypes.object.isRequired,
  navigateTo: PropTypes.string.isRequired,
};

export default UserProjectCard;
