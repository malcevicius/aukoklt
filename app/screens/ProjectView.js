import React from 'react';
import PropTypes from 'prop-types';
import { Text, ScrollView } from 'react-native';

import { Container } from '../components/Container';
import { ImageGallery } from '../components/ImageGallery';
import { StickyHeader } from '../components/StickyHeader';

const ProjectView = ({ singleProject, navigation }) =>
  <Container>
    <StickyHeader navigation={navigation} />
    <ScrollView>
      <ImageGallery imageList={singleProject.gallery} />
      <Text>
        {singleProject.title}
      </Text>
    </ScrollView>
  </Container>;

ProjectView.propTypes = {
  singleProject: PropTypes.object,
  navigation: PropTypes.object,
};

export default ProjectView;
