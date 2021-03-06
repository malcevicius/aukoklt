import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, Platform } from 'react-native';

import lang from '../../../config/lang';
import globalstyle from '../../../config/globalstyle';

import { Container } from '../../../components/Container';
import { ImageGallery } from '../../../components/ImageGallery';
import { Title2 } from '../../../components/Text/Title2';
import { TextWithTitle } from '../../../components/TextWithTitle';
import { TargetNumbers } from '../../../components/TargetNumbers';

class UserProjectView extends Component {
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

  render() {
    return (
      <Container>
        <ScrollView>
          <ImageGallery imageList={this.props.projectInfo.gallery} />
          <View style={globalstyle.baseHorizontalMargins}>
            <Title2 marginTopBase marginBottomSmall text={this.props.projectInfo.title} />
            <TargetNumbers
              red
              targetAmount={this.props.projectInfo.need_to_donate}
              donatedAmount={this.props.projectInfo.donated}
            />
            {this.props.projectInfo.purpose !== null && (
              <TextWithTitle
                title={lang.user.project.purposeTitle}
                text={this.props.projectInfo.projectTitle}
              />
            )}
            {this.props.projectInfo.description !== null && (
              <TextWithTitle
                collapsible
                stripHTML
                title={lang.user.project.descriptionTitle}
                text={this.props.projectInfo.description}
              />
            )}
          </View>
        </ScrollView>
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

UserProjectView.navigatorStyle = {
  ...navigatorStyle,
  drawUnderNavBar: true,
  navBarNoBorder: true,
  navBarTranslucent: true,
  navBarTransparent: true,
};

UserProjectView.propTypes = {
  projectInfo: PropTypes.object.isRequired,
  navigator: PropTypes.object.isRequired,
};

export default UserProjectView;
