import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Image, AsyncStorage } from 'react-native';
import { LoginManager } from 'react-native-fbsdk';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

import lang from '../../config/lang';
import style from './style';

import { Title2 } from '../Text/Title2';

const triggerStyles = {
  triggerTouchable: {
    underlayColor: 'transparent',
  },
};

const optionsStyles = {
  optionsWrapper: {},
  optionsContainer: {
    backgroundColor: '#827878',
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.24,
    shadowRadius: 0,
  },
};

const optionStyles = {
  optionWrapper: {
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  optionText: {
    color: '#FFF',
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: 16,
  },
  optionTouchable: {
    underlayColor: 'transparent',
  },
};

class UserHeader extends PureComponent {
  onLogoutAction = async () => {
    await AsyncStorage.removeItem('fb_token');
    await AsyncStorage.removeItem('user');
    LoginManager.logOut();
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
            <MenuTrigger customStyles={triggerStyles}>
              <Image style={style.userThumbnail} source={{ uri: this.props.userImage }} />
            </MenuTrigger>
            <MenuOptions customStyles={optionsStyles}>
              <MenuOption
                customStyles={optionStyles}
                onSelect={this.onLogoutAction}
                text={lang.user.logout}
              />
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
  userImage: PropTypes.string,
  // Margins
  marginHorizontal: PropTypes.bool,
};

export default UserHeader;
