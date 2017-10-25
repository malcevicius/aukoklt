import { Navigation } from 'react-native-navigation';

import Main from '../screens/Main';

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

// Registering all screens
export function registerScreens() {
  Navigation.registerComponent('aukoklt.Main', () => Main);
  Navigation.registerComponent('aukoklt.Welcome', () => Welcome);
  Navigation.registerComponent('aukoklt.UserProjectList', () => UserProjectList);
  Navigation.registerComponent('aukoklt.UserProjectView', () => UserProjectView);
  Navigation.registerComponent('aukoklt.ProjectWizard.FirstStep', () => ChooseProject);
  Navigation.registerComponent('aukoklt.ProjectWizard.FirstStep.ProjectView', () => ProjectView);
  Navigation.registerComponent('aukoklt.ProjectWizard.SecondStep', () => SecondStep);
  Navigation.registerComponent('aukoklt.ProjectWizard.ThirdStep', () => ThirdStep);
}
