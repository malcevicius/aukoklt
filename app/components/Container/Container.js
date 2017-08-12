import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';

import style from './style';

const Container = ({ children }) => (
  <View style={style.container}>
    <ScrollView style={style.scrollview}>
      {children}
    </ScrollView>
  </View>
);

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
