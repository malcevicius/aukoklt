import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';

import Ionicons from 'react-native-vector-icons/Ionicons';

import ProjectList from './screens/ProjectList';
import UserProjects from './screens/UserProjects';

const TabNav = TabNavigator(
  {
    Projects: {
      screen: ProjectList,
      path: '/projectlist',
      navigationOptions: {
        tabBarLabel: 'Projektai',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    UserProjects: {
      screen: UserProjects,
      path: '/userprojects',
      navigationOptions: {
        title: 'Mano projektai',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-contact' : 'ios-contact-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  },
);

const StacksOverTabs = StackNavigator({
  Root: {
    screen: TabNav,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTitleStyle: {},
    },
  },
});

EStyleSheet.build({
  // GLOBAL COLORS
  $backgroundColor: '#fff',
  $bodyTextColor: '#808080',
  $titleTextColor: '#333333',
  $brandColor: '#B9192B',
  $borderColor: '#ededed',
});
export default StacksOverTabs;
