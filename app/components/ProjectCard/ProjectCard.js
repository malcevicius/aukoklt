import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import style from './style';
import globalstyle from '../../config/style';

const ProjectCard = ({ projectTitle, organisationName, thumbnail, neededAmount, currentAmount }) =>
  <TouchableOpacity style={style.card}>
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
            {neededAmount} EUR
          </Text>
        </View>
        <View style={style.numberItem}>
          <Text style={style.transparentText}>Surinkta</Text>
          <Text style={style.numberText}>
            {currentAmount} EUR
          </Text>
        </View>
      </View>
    </Image>
  </TouchableOpacity>;

ProjectCard.propTypes = {
  projectTitle: PropTypes.string,
  organisationName: PropTypes.string,
  thumbnail: PropTypes.any,
  neededAmount: PropTypes.number,
  currentAmount: PropTypes.number,
};

export default ProjectCard;
