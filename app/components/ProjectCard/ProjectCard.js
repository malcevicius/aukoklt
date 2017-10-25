import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Image, Text } from 'react-native';

import style from './style';

import { MicroText } from '../Text/MicroText';
import { SmallText } from '../Text/SmallText';
import { LargeText } from '../Text/LargeText';

class ProjectCard extends PureComponent {
  onPressAction = () => {
    this.props.navigator.push({
      screen: this.props.navigateTo,
      passProps: { projectInfo: this.props.projectInfo },
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
          <LargeText projectTitle text={this.props.projectInfo.title} />
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

ProjectCard.navigatorStyle = {
  navBarHidden: true,
};

ProjectCard.propTypes = {
  projectInfo: PropTypes.object.isRequired,
  navigator: PropTypes.object.isRequired,
  navigateTo: PropTypes.string.isRequired,
};

export default ProjectCard;
