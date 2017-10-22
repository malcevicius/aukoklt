import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StatusBar, TouchableOpacity, Text } from 'react-native';

import { Container } from '../../../../components/Container';
import { ImageGallery } from '../../../../components/ImageGallery';
import { StickyHeader } from '../../../../components/StickyHeader';
import { TitleText } from '../../../../components/TitleText';
import { SemiTransparentLabel } from '../../../../components/SemiTransparentLabel';
import { TargetNumbers } from '../../../../components/TargetNumbers';

const ProjectView = ({ singleProject, navigation, rootKey }) => (
  <Container>
    <StatusBar backgroundColor="black" barStyle="light-content" />
    <StickyHeader />
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
          navigation.navigate('SecondStep', {
            selectedProjectId: singleProject.project_id,
            rootKey,
          })}
      >
        <Text>Rinkti lėšas šiam projektui</Text>
      </TouchableOpacity>
    </ScrollView>
  </Container>
);

ProjectView.propTypes = {
  singleProject: PropTypes.object,
  rootKey: PropTypes.string,
};

export default ProjectView;
