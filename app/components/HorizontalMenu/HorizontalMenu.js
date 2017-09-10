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
    <MenuItem name="Visi projektai" toggle />
    <MenuItem name="Vaikams ir šeimai" />
    <MenuItem name="Sveikatai ir neįgaliesiems" />
    <MenuItem name="Gyvūnams ir gamtai" />
  </ScrollView>;

export default HorizontalMenu;
