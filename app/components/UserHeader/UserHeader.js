import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Image, AsyncStorage } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

import lang from '../../config/lang';
import style from './style';

import { Title2 } from '../Text/Title2';

class UserHeader extends PureComponent {
  onLogoutAction = () => {
    AsyncStorage.removeItem('fb_token');
    this.props.navigator.resetTo({
      screen: 'aukoklt.Welcome',
      animated: false,
    });
  };

  render() {
    return (
      <View style={[style.headerContainer, this.props.marginHorizontal && style.marginHorizontal]}>
        <View style={style.headerLeft}>
          <Title2 marginBottomTiny text={this.props.titleText} />
        </View>
        <View style={style.headerRight}>
          <Menu>
            <MenuTrigger>
              <Image
                style={style.userThumbnail}
                source={{
                  uri:
                    'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/c75.0.320.320/p320x320/17342860_10207250909505873_4889216807293798707_n.jpg?oh=480bdf9011fd7fbe6981e1e41419f46f&oe=5A68B37E',
                }}
              />
            </MenuTrigger>
            <MenuOptions>
              <MenuOption onSelect={this.onLogoutAction} text={lang.user.logout} />
            </MenuOptions>
          </Menu>
        </View>
      </View>
    );
  }
}

UserHeader.propTypes = {
  titleText: PropTypes.string.isRequired,
  navigator: PropTypes.object,
  // Margins
  marginHorizontal: PropTypes.bool,
};

export default UserHeader;
