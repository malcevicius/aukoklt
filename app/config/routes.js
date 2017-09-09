import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { withMappedNavigationProps } from 'react-navigation-props-mapper';

import Ionicons from 'react-native-vector-icons/Ionicons';

import ProjectList from '../screens/ProjectList';
import SingleProject from '../screens/SingleProject';
import UserProjects from '../screens/UserProjects';

const TabNav = TabNavigator(
  {
    Projects: {
      screen: withMappedNavigationProps(ProjectList),
      path: '/projectlist',
      navigationOptions: {
        tabBarLabel: 'Projektai',
        tabBarIcon: ({ tintColor, focused }) =>
          <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />,
      },
    },
    UserProjects: {
      screen: withMappedNavigationProps(UserProjects),
      path: '/userprojects',
      navigationOptions: {
        title: 'Mano projektai',
        tabBarIcon: ({ tintColor, focused }) =>
          <Ionicons
            name={focused ? 'ios-contact' : 'ios-contact-outline'}
            size={26}
            style={{ color: tintColor }}
          />,
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  },
);

const Routes = StackNavigator({
  Root: {
    screen: TabNav,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTitleStyle: {},
    },
  },
  ProjectView: {
    screen: withMappedNavigationProps(SingleProject),
    navigationOptions: {
      title: 'Projektas',
    },
  },
});

export default Routes;
