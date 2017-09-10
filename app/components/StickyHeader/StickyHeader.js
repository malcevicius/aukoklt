import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';

import style from './style';
import globalstyle from '../../config/style';

const StickyHeader = ({ navigation }) =>
  <View style={style.headerComponent}>
    <TouchableOpacity activeOpacity={1} focusedOpacity={1} onPress={() => navigation.goBack(null)}>
      <Text style={style.buttonText}>Go Back</Text>
    </TouchableOpacity>
  </View>;

StickyHeader.propTypes = {
  navigation: PropTypes.object,
};

export default StickyHeader;
