import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { FormattedCurrency } from 'react-native-globalize';

import style from './style';
import globalstyle from '../../config/style';

const ProjectCard = ({ projectInfo, navigation }) =>
  <TouchableOpacity
    style={style.card}
    activeOpacity={0.9}
    focusedOpacity={1}
    onPress={() => navigation.navigate('ProjectView', { project: projectInfo })}
  >
    <Image source={{ uri: projectInfo.gallery[0].url }} style={style.imageBackground} />
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
            <FormattedCurrency
              value={projectInfo.need_to_donate}
              currency="EUR"
              numberStyle="symbol"
              maximumFractionDigits="0"
            />
          </Text>
        </View>
        <View style={style.numberItem}>
          <Text style={style.transparentText}>Surinkta</Text>
          <Text style={style.numberText}>
            <FormattedCurrency
              value={projectInfo.donated}
              currency="EUR"
              numberStyle="symbol"
              maximumFractionDigits="0"
            />
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
