import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native';
import lang from '../../../../config/lang';
import globalstyle from '../../../../config/globalstyle';

import { Container } from '../../../../components/Container';
import { ImageGallery } from '../../../../components/ImageGallery';
import { StickyHeader } from '../../../../components/StickyHeader';
import { Title2 } from '../../../../components/Text/Title2';
import { SmallText } from '../../../../components/Text/SmallText';
import { RegularText } from '../../../../components/Text/RegularText';
import { TextWithTitle } from '../../../../components/TextWithTitle';
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
          <View style={globalstyle.baseHorizontalMargins}>
            <Title2 marginTopBase marginBottomTiny text={this.props.projectInfo.title} />
            <RegularText companyLabel marginBottomBase text={this.props.projectInfo.company} />
            <TargetNumbers
              red
              targetAmount={this.props.projectInfo.need_to_donate}
              donatedAmount={this.props.projectInfo.donated}
            />
            <TextWithTitle
              title={lang.wizard.step1.project.purposeTitle}
              text={this.props.projectInfo.purpose}
            />
            <TextWithTitle
              collapsible
              stripHTML
              title={lang.wizard.step1.project.descriptionTitle}
              text={this.props.projectInfo.description}
            />
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

ProjectView.navigatorStyle = {
  navBarHidden: true,
  statusBarHidden: true,
};

ProjectView.propTypes = {
  projectInfo: PropTypes.object.isRequired,
  navigator: PropTypes.object.isRequired,
};

export default ProjectView;
