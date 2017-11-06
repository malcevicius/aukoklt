import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, ScrollView, Share } from 'react-native';

import lang from '../../../config/lang';
import globalstyle from '../../../config/globalstyle';

import { WizardHeader } from '../../../components/WizardHeader/';
import { Container } from '../../../components/Container';
import { Button } from '../../../components/Button';

class ThirdStep extends Component {
  componentWillUnmount() {
    this.props.onDismissFunction();
  }

  openUserProjectView = async () => {
    await this.props.navigator.dismissModal({
      animationType: 'slide-down',
    });
  };

  openDefaultShareDialog = () => {
    try {
      Share.share(
        {
          message: lang.wizard.step3.shareDialog.messageBody + this.props.userProjectUrl,
          title: lang.wizard.step3.shareDialog.messageTitle,
        },
        {
          // Android only:
          dialogTitle: lang.wizard.step3.shareDialog.dialogTitle,
          // iOS only:
          excludedActivityTypes: [
            'com.apple.UIKit.activity.PostToTwitter',
            'com.apple.UIKit.activity.PostToVimeo',
            'com.apple.UIKit.activity.PostToWeibo',
            'com.apple.UIKit.activity.PostToTencentWeibo',
            'com.apple.UIKit.activity.PostToFlickr',
            'com.apple.UIKit.activity.OpenInIBooks',
            'com.apple.UIKit.activity.AssignToContact',
            'com.apple.UIKit.activity.AddToReadingList',
            'com.apple.UIKit.activity.AirDrop',
            'com.apple.UIKit.activity.Print',
            'com.apple.UIKit.activity.SaveToCameraRoll',
            'com.apple.UIKit.activity.MarkupAsPDF',
          ],
        },
      );
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container>
        <ScrollView style={globalstyle.baseHorizontalMargins}>
          <WizardHeader
            step="3"
            titleText={lang.wizard.step3.title}
            titleDescription={lang.wizard.step3.description}
          />
          <Text>{lang.wizard.step3.title}</Text>
          <Text>{this.props.userProjectUrl}</Text>
          <Button
            smallMarginTop
            textValue={lang.wizard.step3.shareMisc}
            onPressAction={this.openDefaultShareDialog}
          />
          <Button
            smallMarginTop
            textValue={lang.wizard.step3.showProjectsBtn}
            onPressAction={this.openUserProjectView}
          />
        </ScrollView>
      </Container>
    );
  }
}

ThirdStep.navigatorStyle = {
  navBarBackgroundColor: '#FFFFFF',
  navBarNoBorder: true,
};

ThirdStep.propTypes = {
  navigator: PropTypes.object,
  userProjectUrl: PropTypes.string,
  onDismissFunction: PropTypes.func,
};

export default ThirdStep;
