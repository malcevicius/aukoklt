import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import style from './style';
import globalstyle from '../../config/style';

const ProjectCard = ({ projectInfo, navigation }) =>
  <TouchableOpacity
    style={style.card}
    activeOpacity={0.9}
    focusedOpacity={1}
    onPress={() => navigation.navigate('ProjectView', { project: projectInfo })}
  >
    <Image source={{ uri: projectInfo.img }} style={style.imageBackground} />
    <View style={style.details}>
      <View style={style.titleView}>
        <Text style={[globalstyle.h2, style.title]}>
          {projectInfo.title}
        </Text>
        <Text style={style.transparentText}>
          {projectInfo.company}
        </Text>
      </View>
      <View style={style.numbersView}>
        <View style={style.numberItem}>
          <Text style={style.transparentText}>Reikia</Text>
          <Text style={style.numberText}>
            {projectInfo.need_to_donate} EUR
          </Text>
        </View>
        <View style={style.numberItem}>
          <Text style={style.transparentText}>Surinkta</Text>
          <Text style={style.numberText}>
            {projectInfo.donated} EUR
          </Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>;

ProjectCard.propTypes = {
  projectInfo: PropTypes.object,
  navigation: PropTypes.object,
};

export default ProjectCard;
