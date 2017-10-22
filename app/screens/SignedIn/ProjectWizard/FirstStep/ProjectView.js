import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StatusBar, TouchableOpacity, Text } from 'react-native';

import { Container } from '../../../../components/Container';
import { ImageGallery } from '../../../../components/ImageGallery';
import { StickyHeader } from '../../../../components/StickyHeader';
import { TitleText } from '../../../../components/TitleText';
import { SemiTransparentLabel } from '../../../../components/SemiTransparentLabel';
import { TargetNumbers } from '../../../../components/TargetNumbers';
import { Button } from '../../../../components/Button';

class ProjectView extends Component {
  onBackButtonPress = () => {
    this.props.navigator.pop({
      animated: true,
      animationType: 'slide-horizontal',
    });
  };

  openSecondStep = () => {
    this.props.navigator.push({
      screen: 'aukoklt.ProjectWizard.SecondStep',
      passProps: { selectedProjectId: this.props.projectInfo.project_id },
    });
  };

  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <StickyHeader backIcon dark onPressAction={this.onBackButtonPress} />
        <ScrollView>
          <ImageGallery imageList={this.props.projectInfo.gallery} />
          <TitleText dark medium title={this.props.projectInfo.title} />
          <SemiTransparentLabel dark textValue={this.props.projectInfo.company} />
          <TargetNumbers
            red
            targetAmount={this.props.projectInfo.need_to_donate}
            donatedAmount={this.props.projectInfo.donated}
          />
        </ScrollView>
        <Button
          textValue="Rinkti lėšas šiam projektui"
          onPressAction={this.openSecondStep}
          fixedBottom
        />
      </Container>
    );
  }
}

ProjectView.navigatorStyle = {
  navBarHidden: true,
};

ProjectView.propTypes = {
  projectInfo: PropTypes.object.isRequired,
  navigator: PropTypes.object.isRequired,
};

export default ProjectView;
