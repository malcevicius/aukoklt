import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { ImageGallery } from '../components/ImageGallery';
import { StickyHeader } from '../components/StickyHeader';
import { TitleText } from '../components/TitleText';
import { SemiTransparentLabel } from '../components/SemiTransparentLabel';
import { TargetNumbers } from '../components/TargetNumbers';

const ProjectView = ({ singleProject, navigation }) => (
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
    </ScrollView>
  </Container>
);

ProjectView.propTypes = {
  singleProject: PropTypes.object,
  navigation: PropTypes.object,
};

export default ProjectView;
