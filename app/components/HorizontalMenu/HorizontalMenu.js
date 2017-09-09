import React from 'react';
import { ScrollView } from 'react-native';

import style from './style';
import MenuItem from './MenuItem';

const HorizontalMenu = () =>
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={style.scrollViewContainer}
  >
    <MenuItem name="Visi projektai" active />
    <MenuItem name="Vaikams ir šeimai" />
    <MenuItem name="Sveikatai ir neįgaliesiems" />
  </ScrollView>;

export default HorizontalMenu;
