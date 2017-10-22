import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Image } from 'react-native';

import { TitleText } from '../TitleText';
import { TargetNumbers } from '../TargetNumbers';
import { SemiTransparentLabel } from '../SemiTransparentLabel';

import style from './style';

class ProjectCard extends Component {
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
        style={style.card}
        activeOpacity={1}
        focusedOpacity={1}
      >
        <View style={style.imageOverlay} />
        <Image
          source={{ uri: this.props.projectInfo.gallery[0].url }}
          style={style.imageBackground}
        />
        <View style={style.details}>
          <View style={style.titleView}>
            <TitleText light medium title={this.props.projectInfo.title} />
            <SemiTransparentLabel light textValue={this.props.projectInfo.company} />
          </View>
          <TargetNumbers
            dark
            onCard
            targetAmount={this.props.projectInfo.need_to_donate}
            donatedAmount={this.props.projectInfo.donated}
          />
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
