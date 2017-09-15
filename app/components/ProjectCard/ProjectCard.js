import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import { TitleText } from '../TitleText';
import { TargetNumbers } from '../TargetNumbers';

import style from './style';

const ProjectCard = ({ projectInfo, navigation }) => (
  <TouchableOpacity
    style={style.card}
    activeOpacity={1}
    focusedOpacity={1}
    onPress={() => navigation.navigate('ProjectView', { singleProject: projectInfo })}
  >
    <View style={style.imageOverlay} />
    <Image source={{ uri: projectInfo.gallery[0].url }} style={style.imageBackground} />
    <View style={style.details}>
      <View style={style.titleView}>
        <TitleText light medium title={projectInfo.title} />
        <Text style={style.transparentText}>{projectInfo.company}</Text>
      </View>
      <TargetNumbers
        targetAmount={projectInfo.need_to_donate}
        donatedAmount={projectInfo.donated}
      />
    </View>
  </TouchableOpacity>
);

ProjectCard.propTypes = {
  projectInfo: PropTypes.object,
  navigation: PropTypes.object,
};

export default ProjectCard;
