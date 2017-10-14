import { StackNavigator, TabNavigator } from 'react-navigation';
import { withMappedNavigationProps } from 'react-navigation-props-mapper';

import WelcomeView from '../screens/WelcomeView';
import RootProjectList from '../screens/RootProjectList';
import RootProjectView from '../screens/RootProjectView';
import UserProjectList from '../screens/UserProjectList';
import UserProjectView from '../screens/UserProjectView';
import FundraiseSetup from '../screens/FundraiseSetup';

const RootStack = StackNavigator({
  RootProjectList: {
    screen: withMappedNavigationProps(RootProjectList),
    path: '/RootProjectList',
    navigationOptions: {
      header: null,
    },
  },
  RootProjectView: {
    screen: withMappedNavigationProps(RootProjectView),
    navigationOptions: {
      header: null,
    },
  },
  FundraiseSetup: {
    screen: withMappedNavigationProps(FundraiseSetup),
    navigationOptions: {
      header: null,
    },
  },
});

const UserStack = StackNavigator({
  UserProjectList: {
    screen: withMappedNavigationProps(UserProjectList),
    path: '/UserProjectList',
    navigationOptions: {
      header: null,
    },
  },
  UserProjectView: {
    screen: withMappedNavigationProps(UserProjectView),
    navigationOptions: {
      header: null,
    },
  },
});

const SignedIn = TabNavigator(
  {
    RootStack: {
      screen: RootStack,
      navigationOptions: {
        header: null,
        tabBarVisible: false,
      },
    },
    UserStack: {
      screen: UserStack,
      navigationOptions: {
        header: null,
        tabBarVisible: false,
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  },
);

const SignedOut = StackNavigator({
  WelcomeView: {
    screen: withMappedNavigationProps(WelcomeView),
    navigationOptions: {
      header: null,
    },
  },
});

export const createRootNavigator = (signedIn = false) =>
  StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        navigationOptions: {
          gesturesEnabled: false,
        },
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          gesturesEnabled: false,
        },
      },
    },
    {
      headerMode: 'none',
      mode: 'modal',
      initialRouteName: signedIn ? 'SignedIn' : 'SignedOut',
    },
  );
