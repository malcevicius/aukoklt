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

  async componentDidMount() {
    await this.makeRemoteRequest();
  }

  onNavigatorEvent(event) {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'close') {
        this.props.navigator.dismissModal();
      }
    }
  }

  makeRemoteRequest = async () => {
    const { offset } = this.state;
    const url = `https://www.aukok.lt/api/projects?limit=10&offset=${offset}`;
    this.setState({ loading: true });

    try {
      const res = await fetch(url);
      const response = await res.json();
      this.setState({
        data: offset === 0 ? response.projects : [...this.state.data, ...response.projects],
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
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
      onPressAction={this.onDismissModalButtonPress}
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
          contentContainerStyle={globalstyle.projectsList}
          numColumns={2}
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

let navigatorStyle = {};

if (Platform.OS === 'ios') {
  navigatorStyle = {};
} else {
  navigatorStyle = {
    navBarHideOnScroll: true,
    drawUnderNavBar: true,
  };
}

ChooseProject.navigatorStyle = {
  ...navigatorStyle,
  navBarBackgroundColor: '#FFF',
};

ChooseProject.propTypes = {
  navigator: PropTypes.object,
};

export default ChooseProject;
