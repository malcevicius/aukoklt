import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, Platform } from 'react-native';

import lang from '../../../../config/lang';
import globalstyle from '../../../../config/globalstyle';
import images from '../../../../config/images';

import { Container } from '../../../../components/Container';
import { ImageGallery } from '../../../../components/ImageGallery';
import { Title2 } from '../../../../components/Text/Title2';
import { RegularText } from '../../../../components/Text/RegularText';
import { TextWithTitle } from '../../../../components/TextWithTitle';
import { TargetNumbers } from '../../../../components/TargetNumbers';
import { Button } from '../../../../components/Button';

class ProjectView extends Component {
  constructor(props) {
    super(props);

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'back') {
        this.props.navigator.pop({
          animated: true,
          animationType: 'slide-horizontal',
        });
      }
    }
  }

  openSecondStep = () => {
    let leftButtons = [];

    if (Platform.OS === 'ios') {
      leftButtons = [
        {
          id: 'back',
          title: 'Back',
          icon: images.navBar.back.dark,
          disableIconTint: true,
        },
      ];
    }
    this.props.navigator.push({
      screen: 'aukoklt.ProjectWizard.SecondStep',
      passProps: { selectedProjectId: this.props.projectInfo.project_id },
      navigatorButtons: {
        leftButtons,
      },
    });
  };

  render() {
    return (
      <Container>
        <ScrollView>
          <ImageGallery imageList={this.props.projectInfo.gallery} />
          <View style={globalstyle.baseHorizontalMargins}>
            <Title2 marginTopBase marginBottomTiny text={this.props.projectInfo.title} />
            <RegularText companyLabel marginBottomBase text={this.props.projectInfo.company} />
            <TargetNumbers
              red
              targetAmount={this.props.projectInfo.need_to_donate}
              donatedAmount={this.props.projectInfo.donated}
            />
            {this.props.projectInfo.purpose !== null && (
              <TextWithTitle
                title={lang.wizard.step1.project.purposeTitle}
                text={this.props.projectInfo.purpose}
              />
            )}
            {this.props.projectInfo.description !== null && (
              <TextWithTitle
                collapsible
                stripHTML
                title={lang.wizard.step1.project.descriptionTitle}
                text={this.props.projectInfo.description}
              />
            )}
          </View>
        </ScrollView>
        <Button
          textValue={lang.wizard.step1.project.ctaButtonText}
          onPressAction={this.openSecondStep}
          fixedBottom
        />
      </Container>
    );
  }
}

let navigatorStyle = {};

if (Platform.OS === 'ios') {
  navigatorStyle = {
    statusBarTextColorSchemeSingleScreen: 'light',
  };
} else {
  navigatorStyle = {};
}

ProjectView.navigatorStyle = {
  ...navigatorStyle,
  drawUnderNavBar: true,
  navBarNoBorder: true,
  navBarTranslucent: true,
  navBarTransparent: true,
};

ProjectView.propTypes = {
  projectInfo: PropTypes.object.isRequired,
  navigator: PropTypes.object.isRequired,
};

export default ProjectView;
