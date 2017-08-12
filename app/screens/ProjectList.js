import React, { Component } from 'react';

import { Container } from '../components/Container';
import { ProjectCard } from '../components/ProjectCard';
import { ScreenTitle } from '../components/ScreenTitle';
import { StickyHeader } from '../components/StickyHeader';

class ProjectList extends Component {
  static navigationOptions = {
    header: <StickyHeader title="Projektai" />,
  };

  render() {
    return (
      <Container>
        <ScreenTitle title="Projektai" />
        <ProjectCard title="Projekto pavadinimas" description="Žiauriai geras projektas čia!" />
      </Container>
    );
  }
}

export default ProjectList;
