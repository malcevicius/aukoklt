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
export function registerScreens(store, Provider) {
  // Screens
  Navigation.registerComponent('aukoklt.Main', () => Main, store, Provider);
  Navigation.registerComponent('aukoklt.Welcome', () => Welcome, store, Provider);
  Navigation.registerComponent('aukoklt.UserProjectList', () => UserProjectList, store, Provider);
  Navigation.registerComponent('aukoklt.UserProjectView', () => UserProjectView, store, Provider);
  Navigation.registerComponent(
    'aukoklt.ProjectWizard.FirstStep',
    () => ChooseProject,
    store,
    Provider,
  );
  Navigation.registerComponent(
    'aukoklt.ProjectWizard.FirstStep.ProjectView',
    () => ProjectView,
    store,
    Provider,
  );
  Navigation.registerComponent(
    'aukoklt.ProjectWizard.SecondStep',
    () => SecondStep,
    store,
    Provider,
  );
  Navigation.registerComponent('aukoklt.ProjectWizard.ThirdStep', () => ThirdStep, store, Provider);
}
