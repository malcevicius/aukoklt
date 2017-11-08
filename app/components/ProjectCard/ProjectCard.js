import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Platform } from 'react-native';

import images from '../../config/images';
import style from './style';

import { MicroText } from '../Text/MicroText';
import { SmallText } from '../Text/SmallText';
import { MediumText } from '../Text/MediumText';
import { HandledImage } from '../HandledImage';

class ProjectCard extends PureComponent {
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
      passProps: {
        projectInfo: this.props.projectInfo,
        onDismissFunction: this.props.onDismissFunction,
      },
      navigatorButtons: {
        leftButtons,
      },
    });
  };

  getUppercaseLabel = () => {
    if (this.props.projectInfo.projectTitle !== undefined) {
      return this.props.projectInfo.projectTitle;
    } else if (this.props.projectInfo.company !== undefined) {
      return this.props.projectInfo.company;
    }
    return '';
  };

  render() {
    return (
      <TouchableOpacity
        onPress={this.onPressAction}
        style={style.projectContainer}
        activeOpacity={0.8}
        focusedOpacity={0.8}
      >
        <HandledImage image={this.props.projectInfo.img} style={style.thumbnailImage} />
        <View style={style.details}>
          <MicroText uppercaseLabel text={this.getUppercaseLabel()} />
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
  onDismissFunction: PropTypes.func,
};

export default ProjectCard;
