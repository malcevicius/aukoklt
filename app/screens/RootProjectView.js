import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StatusBar, TouchableOpacity, Text } from 'react-native';

import { Container } from '../components/Container';
import { ImageGallery } from '../components/ImageGallery';
import { StickyHeader } from '../components/StickyHeader';
import { TitleText } from '../components/TitleText';
import { SemiTransparentLabel } from '../components/SemiTransparentLabel';
import { TargetNumbers } from '../components/TargetNumbers';

const RootProjectView = ({ singleProject, navigation }) => (
  <Container>
    <StatusBar backgroundColor="black" barStyle="light-content" />
    <StickyHeader navigation={navigation} />
    <ScrollView>
      <ImageGallery imageList={singleProject.gallery} />
      <TitleText dark medium title={singleProject.title} />
      <SemiTransparentLabel dark textValue={singleProject.company} />
      <TargetNumbers
        red
        targetAmount={singleProject.need_to_donate}
        donatedAmount={singleProject.donated}
      />
      <TouchableOpacity
        activeOpacity={1}
        focusedOpacity={1}
        onPress={() =>
          navigation.navigate('FundraiseSetup', { rootProjectId: singleProject.project_id })}
      >
        <Text>Rinkti lėšas šiam projektui</Text>
      </TouchableOpacity>
    </ScrollView>
  </Container>
);

RootProjectView.propTypes = {
  singleProject: PropTypes.object,
  navigation: PropTypes.object,
};

export default RootProjectView;
