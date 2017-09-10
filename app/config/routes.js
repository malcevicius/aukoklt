import { StackNavigator, TabNavigator } from 'react-navigation';
import { withMappedNavigationProps } from 'react-navigation-props-mapper';

import ProjectList from '../screens/ProjectList';
import ProjectView from '../screens/ProjectView';
import UserProjects from '../screens/UserProjects';

const TabNav = TabNavigator(
  {
    Projects: {
      screen: withMappedNavigationProps(ProjectList),
      path: '/projectlist',
      navigationOptions: {
        header: null,
        tabBarVisible: false,
      },
    },
    UserProjects: {
      screen: withMappedNavigationProps(UserProjects),
      path: '/userprojects',
      navigationOptions: {
        header: null,
        tabBarVisible: false,
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: true,
  },
);

const Routes = StackNavigator({
  Root: {
    screen: TabNav,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#fff',
      },
    },
  },
  ProjectView: {
    screen: withMappedNavigationProps(ProjectView),
    navigationOptions: {
      header: null,
    },
  },
});

export default Routes;
