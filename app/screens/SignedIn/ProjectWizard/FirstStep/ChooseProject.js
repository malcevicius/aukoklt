import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, ActivityIndicator, View, Platform } from 'react-native';
import lang from '../../../../config/lang';
import globalstyle from '../../../../config/globalstyle';

import { Container } from '../../../../components/Container';
import { ProjectCard } from '../../../../components/ProjectCard';
import { WizardHeader } from '../../../../components/WizardHeader/';

class ChooseProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      offset: 0,
    };

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  onNavigatorEvent(event) {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'close') {
        this.props.navigator.dismissModal();
      }
    }
  }

  makeRemoteRequest = () => {
    const url = `https://www.aukok.lt/api/projects?limit=20&offset=${this.state.offset}`;
    this.setState({ loading: true }, async () => {
      try {
        const res = await fetch(url);
        const response = await res.json();
        this.setState({
          data:
            this.state.offset === 0
              ? response.projects
              : [...this.state.data, ...response.projects],
          loading: false,
        });
      } catch (error) {
        console.log(error);
      }
    });
  };

  handleLoadMore = () => {
    if (!this.onEndReachedCalledDuringMomentum) {
      this.setState(
        {
          offset: this.state.offset + 20,
        },
        () => {
          this.makeRemoteRequest();
        },
      );
      this.onEndReachedCalledDuringMomentum = true;
    }
  };

  renderHeader = () => (
    <WizardHeader
      step="1"
      titleText={lang.wizard.step1.title}
      titleDescription={lang.wizard.step1.description}
      marginHorizontal
    />
  );

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
        }}
      >
        <ActivityIndicator animating size="small" />
      </View>
    );
  };

  render() {
    return (
      <Container>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ProjectCard
              projectInfo={item}
              navigator={this.props.navigator}
              onDismissFunction={this.props.onDismissFunction}
              navigateTo="aukoklt.ProjectWizard.FirstStep.ProjectView"
            />
          )}
          keyExtractor={item => item.project_id}
          contentContainerStyle={globalstyle.projectsList}
          numColumns={2}
          onMomentumScrollBegin={() => {
            this.onEndReachedCalledDuringMomentum = false;
          }}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0.6}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    );
  }
}

let navigatorStyle = {};

if (Platform.OS === 'ios') {
  navigatorStyle = {
    navBarNoBorder: true,
    navBarTransparent: true,
  };
} else {
  navigatorStyle = {};
}

ChooseProject.navigatorStyle = {
  ...navigatorStyle,
};

ChooseProject.propTypes = {
  navigator: PropTypes.object,
  onDismissFunction: PropTypes.func,
};

export default ChooseProject;
