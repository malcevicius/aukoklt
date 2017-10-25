import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';

import { Container } from '../../../../components/Container';
import { ImageGallery } from '../../../../components/ImageGallery';
import { StickyHeader } from '../../../../components/StickyHeader';
import { Title2 } from '../../../../components/Text/Title2';
import { RegularText } from '../../../../components/Text/RegularText';
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
        <StickyHeader backIcon dark onPressAction={this.onBackButtonPress} />
        <ScrollView>
          <ImageGallery imageList={this.props.projectInfo.gallery} />
          <Title2 text={this.props.projectInfo.title} />
          <RegularText text={this.props.projectInfo.company} />
          <TargetNumbers
            red
            targetAmount={this.props.projectInfo.need_to_donate}
            donatedAmount={this.props.projectInfo.donated}
          />
          <RegularText stripHTML text={this.props.projectInfo.description} />
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
  statusBarHidden: true,
};

ProjectView.propTypes = {
  projectInfo: PropTypes.object.isRequired,
  navigator: PropTypes.object.isRequired,
};

export default ProjectView;
