import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, ActivityIndicator, View, Platform, Text, ListView } from 'react-native';
import { MenuContext, Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

import lang from '../../../../config/lang';
import globalstyle from '../../../../config/globalstyle';

import { Container } from '../../../../components/Container';
import { ProjectCard } from '../../../../components/ProjectCard';
import { WizardHeader } from '../../../../components/WizardHeader/';
import { Button } from '../../../../components/Button';

class ChooseProject extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      loading: false,
      refreshing: false,
      data: [],
      offset: 0,
      activeCategory: {
        category_id: '',
        name: 'Filtruoti sąrašą',
      },
      categories: ds.cloneWithRows([
        {
          category_id: '',
          name: 'VISI PROJEKTAI',
        },
        {
          category_id: 'f2133eeb-3845-44ac-a7ce-52f2309977cb',
          name: 'VAIKAMS IR ŠEIMAI',
        },
        {
          category_id: '1741b67b-61d1-4685-83a2-b96ec762b00c',
          name: 'SVEIKATAI IR NEĮGALIESIEMS',
        },
        {
          category_id: '88023553-e4a7-4c0e-a3e1-0ade072055d7',
          name: 'EDUKACIJA IR SOCIALINĖ GEROVĖ',
        },
        {
          category_id: 'c318919e-60be-43b6-a593-9611030d401c',
          name: 'GYVŪNAMS IR GAMTAI',
        },
      ]),
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
    const url = `https://www.aukok.lt/api/projects?limit=20&offset=${this.state
      .offset}&categoryId=${this.state.activeCategory.category_id}`;
    this.setState({ loading: true }, async () => {
      try {
        const res = await fetch(url);
        const response = await res.json();
        this.setState(
          {
            data:
              this.state.offset === 0
                ? response.projects
                : [...this.state.data, ...response.projects],
            loading: false,
            refreshing: false,
          },
          () => {
            // console.log('makeRemoteRequest fired');
          },
        );
      } catch (error) {
        console.log(error);
        this.setState({
          loading: false,
          refreshing: false,
        });
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
          // console.log('handleLoadMore fired');
          this.makeRemoteRequest();
        },
      );
      this.onEndReachedCalledDuringMomentum = true;
    }
  };

  handleRefresh = () => {
    this.setState(
      {
        data: [],
        offset: 0,
        refreshing: true,
      },
      () => {
        // console.log('handleRefresh fired');
        this.makeRemoteRequest();
      },
    );
  };

  handleCategoryChange({ selectedCategory }) {
    this.setState(
      {
        data: [],
        offset: 0,
        activeCategory: selectedCategory,
      },
      () => {
        // console.log('handleCategoryChange fired');
        this.makeRemoteRequest();
      },
    );
  }

  renderHeader = () => (
    <View>
      <WizardHeader
        step="1"
        titleText={lang.wizard.step1.title}
        titleDescription={lang.wizard.step1.description}
        marginHorizontal
      />
      <Menu>
        <MenuTrigger>
          <Text style={{ fontSize: 16, alignSelf: 'center' }}>FILTRUOTI SĄRAŠĄ</Text>
          {/* <Button
            textValue={
              this.state.activeCategory.name.charAt(0).toUpperCase() +
              this.state.activeCategory.name.slice(1).toLowerCase()
            }
            onPressAction={null}
            full
            secondary
            smallMarginTop
          /> */}
        </MenuTrigger>
        <MenuOptions>
          <ListView
            dataSource={this.state.categories}
            renderRow={rowData => (
              <MenuOption
                onSelect={() =>
                  this.handleCategoryChange({
                    selectedCategory: rowData,
                  })}
                text={rowData.name.charAt(0).toUpperCase() + rowData.name.slice(1).toLowerCase()}
              />
            )}
          />
        </MenuOptions>
      </Menu>
    </View>
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
      <MenuContext>
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
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh}
          />
        </Container>
      </MenuContext>
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
