import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { Container } from '../components/Container';
import { ProjectCard } from '../components/ProjectCard';
import { ScreenTitle } from '../components/ScreenTitle';
import { StickyHeader } from '../components/StickyHeader';

class ProjectList extends Component {
  render() {
    return (
      <Container>
        <FlatList
          data={[
            {
              key: '17dh1d89hasdh90',
              projectTitle: 'Už vaikystę 2017',
              organisationName: 'Visuomeninė organizacija „Gelbėkit vaikus”',
              thumbnail: 'https://www.aukok.lt/Paveikslas/207efa3024c3412dba6678774b9790ea.png',
              neededAmount: 30000,
              currentAmount: 21736,
            },
            {
              key: '10jf12jahjs0fa9',
              projectTitle: 'Išgelbėk naujo žmogaus gyvybę padėdamas nėščiajai',
              organisationName: 'VšĮ „Krizinio nėštumo centras“',
              thumbnail: 'https://www.aukok.lt/Paveikslas/26eec76d45eb47088bd5a592f418dce5.png',
              neededAmount: 20000,
              currentAmount: 15048,
            },
          ]}
          renderItem={({ item }) =>
            <ProjectCard
              key={item.key}
              projectTitle={item.projectTitle}
              organisationName={item.organisationName}
              thumbnail={item.thumbnail}
              neededAmount={item.neededAmount}
              currentAmount={item.currentAmount}
            />}
        />
      </Container>
    );
  }
}

export default ProjectList;
