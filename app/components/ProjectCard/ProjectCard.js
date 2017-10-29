import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Image, Platform } from 'react-native';

import images from '../../config/images';
import style from './style';

import { MicroText } from '../Text/MicroText';
import { SmallText } from '../Text/SmallText';
import { MediumText } from '../Text/MediumText';

class ProjectCard extends PureComponent {
  onPressAction = () => {
    let leftButtons = [];

    if (Platform.OS === 'ios') {
      leftButtons = [
        {
          id: 'back',
          title: 'Back',
          icon: images.navBar.back.dark,
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
      <TouchableOpacity
        onPress={this.onPressAction}
        style={style.projectContainer}
        activeOpacity={0.8}
        focusedOpacity={0.8}
      >
        <Image style={style.thumbnailImage} source={{ uri: this.props.projectInfo.img }} />
        <View style={style.details}>
          <MicroText companyLabel text={this.props.projectInfo.company} />
          <MediumText projectTitle text={this.props.projectInfo.title} />
          <View style={style.projectNumbers}>
            <SmallText currencyNumber highlighted number={this.props.projectInfo.donated} />
            <SmallText
              currencyNumber
              haveSeparator
              number={this.props.projectInfo.need_to_donate}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

ProjectCard.propTypes = {
  projectInfo: PropTypes.object.isRequired,
  navigator: PropTypes.object.isRequired,
  navigateTo: PropTypes.string.isRequired,
};

export default ProjectCard;
