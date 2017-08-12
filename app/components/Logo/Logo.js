import React from 'react';
import { Image } from 'react-native';

import style from './style';

const Logo = () => <Image style={style.logo} source={require('../../images/logo.png')} />;
export default Logo;
