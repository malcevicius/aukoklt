import { StackNavigator } from 'react-navigation';
import { withMappedNavigationProps } from 'react-navigation-props-mapper';

// Welcome & Login screen
import Welcome from '../screens/SignedOut/Welcome';

// User Projects list and project details
import UserProjectList from '../screens/SignedIn/UserProjects/UserProjectList';
import UserProjectView from '../screens/SignedIn/UserProjects/UserProjectView';

// Wizard Screens
import ChooseProject from '../screens/SignedIn/ProjectWizard/FirstStep/ChooseProject';
import ProjectView from '../screens/SignedIn/ProjectWizard/FirstStep/ProjectView';
import SecondStep from '../screens/SignedIn/ProjectWizard/SecondStep';
import ThirdStep from '../screens/SignedIn/ProjectWizard/ThirdStep';

const FirstStep = StackNavigator(
  {
    ChooseProject: {
      screen: withMappedNavigationProps(ChooseProject),
    },
    ProjectView: {
      screen: withMappedNavigationProps(ProjectView),
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    initialRouteName: 'ChooseProject',
  },
);

const UserProjects = StackNavigator(
  {
    UserProjectList: {
      screen: withMappedNavigationProps(UserProjectList),
    },
    UserProjectView: {
      screen: withMappedNavigationProps(UserProjectView),
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'UserProjectList',
  },
);

const ProjectWizard = StackNavigator(
  {
    FirstStep: {
      screen: FirstStep,
    },
    SecondStep: {
      screen: withMappedNavigationProps(SecondStep),
    },
    ThirdStep: {
      screen: withMappedNavigationProps(ThirdStep),
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'FirstStep',
  },
);

const SignedIn = StackNavigator(
  {
    UserProjects: {
      screen: UserProjects,
    },
    ProjectWizard: {
      screen: ProjectWizard,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    initialRouteName: 'UserProjects',
  },
);

const SignedOut = StackNavigator(
  {
    WelcomeView: {
      screen: withMappedNavigationProps(Welcome),
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
