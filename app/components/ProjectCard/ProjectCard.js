import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import style from './style';
import globalstyle from '../../config/style';

const ProjectCard = ({ projectTitle, organisationName, thumbnail, needToDonate, donated }) =>
  <TouchableOpacity style={style.card} activeOpacity={0.9} focusedOpacity={1}>
    <Image source={{ uri: thumbnail }} style={style.imageBackground}>
      <View style={style.titleView}>
        <Text style={[globalstyle.h2, style.title]}>
          {projectTitle}
        </Text>
        <Text style={style.transparentText}>
          {organisationName}
        </Text>
      </View>
      <View style={style.numbersView}>
        <View style={style.numberItem}>
          <Text style={style.transparentText}>Reikia</Text>
          <Text style={style.numberText}>
            {needToDonate} EUR
          </Text>
        </View>
        <View style={style.numberItem}>
          <Text style={style.transparentText}>Surinkta</Text>
          <Text style={style.numberText}>
            {donated} EUR
          </Text>
        </View>
      </View>
    </Image>
  </TouchableOpacity>;

ProjectCard.propTypes = {
  projectTitle: PropTypes.string,
  organisationName: PropTypes.string,
  thumbnail: PropTypes.any,
  needToDonate: PropTypes.number,
  donated: PropTypes.number,
};

export default ProjectCard;
