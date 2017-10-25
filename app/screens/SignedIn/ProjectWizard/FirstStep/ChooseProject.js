import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, ActivityIndicator, View } from 'react-native';
import lang from '../../../../config/lang';

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
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  onDismissModalButtonPress = () => {
    this.props.navigator.dismissModal({
      animationType: 'slide-down',
    });
  };

  makeRemoteRequest = () => {
    const { offset } = this.state;
    const url = `https://www.aukok.lt/api/projects?limit=10&offset=${offset}`;
    this.setState({ loading: true });

    fetch(url)
      .then(response => response.json())
      .then((response) => {
        this.setState({
          data: offset === 0 ? response.projects : [...this.state.data, ...response.projects],
          error: response.error || null,
          loading: false,
          refreshing: false,
        });
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  };

  handleLoadMore = () => {
    this.setState(
      {
        offset: this.state.offset + 10,
      },
      () => {
        this.makeRemoteRequest();
      },
    );
  };

  renderHeader = () => (
    <WizardHeader
      step="1"
      headerButtonIcon="close"
      onPressAction={this.onDismissModalButtonPress}
      titleText={lang.wizard.step1.title}
      titleDescription={lang.wizard.step1.description}
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
        <ActivityIndicator animating size="large" />
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
              navigateTo="aukoklt.ProjectWizard.FirstStep.ProjectView"
            />
          )}
          keyExtractor={item => item.project_id}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={50}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    );
  }
}

ChooseProject.navigatorStyle = {
  // navBarHidden: true,
};

ChooseProject.propTypes = {
  navigator: PropTypes.object,
};

export default ChooseProject;
