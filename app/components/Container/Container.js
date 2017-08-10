import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './styles';

const Container = ({ children }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Hello world!</Text>
    {children}
  </View>
);

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
