import { StackNavigator, TabNavigator } from 'react-navigation';
import { withMappedNavigationProps } from 'react-navigation-props-mapper';

import WelcomeView from '../screens/WelcomeView';
import RootProjectList from '../screens/RootProjectList';
import RootProjectView from '../screens/RootProjectView';
import UserProjectList from '../screens/UserProjectList';
import UserProjectView from '../screens/UserProjectView';
import FundraiseSetup from '../screens/FundraiseSetup';

const AukokProjectsStack = StackNavigator(
  {
    RootProjectList: {
      screen: withMappedNavigationProps(RootProjectList),
      path: '/RootProjectList',
    },
    RootProjectView: {
      screen: withMappedNavigationProps(RootProjectView),
    },
  },
  {
    headerMode: 'none',
  },
);

const AukokProjectsTab = StackNavigator(
  {
    AukokProjectsStack: {
      screen: AukokProjectsStack,
    },
    FundraiseSetup: {
      screen: withMappedNavigationProps(FundraiseSetup),
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

const UserTab = StackNavigator(
  {
    UserProjectList: {
      screen: withMappedNavigationProps(UserProjectList),
      path: '/UserProjectList',
    },
    UserProjectView: {
      screen: withMappedNavigationProps(UserProjectView),
    },
  },
  {
    headerMode: 'none',
  },
);

const SignedIn = TabNavigator(
  {
    AukokProjectsTab: {
      screen: AukokProjectsTab,
      navigationOptions: {
        tabBarVisible: false,
      },
    },
    UserTab: {
      screen: UserTab,
      navigationOptions: {
        tabBarVisible: false,
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    headerMode: 'none',
  },
);

const SignedOut = StackNavigator(
  {
    WelcomeView: {
      screen: withMappedNavigationProps(WelcomeView),
    },
  },
  {
    headerMode: 'none',
  },
);

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
