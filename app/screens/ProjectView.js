import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { ImageGallery } from '../components/ImageGallery';
import { StickyHeader } from '../components/StickyHeader';
import { TitleText } from '../components/TitleText';

const ProjectView = ({ singleProject, navigation }) => (
  <Container>
    <StatusBar hidden />
    <StickyHeader navigation={navigation} />
    <ScrollView>
      <ImageGallery imageList={singleProject.gallery} />
      <TitleText dark medium title={singleProject.title} />
    </ScrollView>
  </Container>
);

ProjectView.propTypes = {
  singleProject: PropTypes.object,
  navigation: PropTypes.object,
};

export default ProjectView;
