import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Platform, ActivityIndicator, AsyncStorage } from 'react-native';
import { MenuContext } from 'react-native-popup-menu';

import images from '../../../config/images';
import lang from '../../../config/lang';
import globalstyle from '../../../config/globalstyle';

import { Container } from '../../../components/Container';
import { UserHeader } from '../../../components/UserHeader';
import { UserProjectCard } from '../../../components/UserProjectCard';
import { Button } from '../../../components/Button';

class UserProjectList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      refreshing: false,
      data: [],
      userData: [],
    };
  }

  async componentDidMount() {
    await this.getUserData();
    await this.makeRemoteRequest();
  }

  getUserData = async () => {
    try {
      const response = await AsyncStorage.getItem('user');
      if (response !== null) {
        const user = JSON.parse(response);
        this.setState({
          userData: user,
        });
      }
    } catch (error) {
      console.log(
        `There has been a problem with your asyncStorage getItem operation: ${error.message}`,
      );
      throw error;
    }
    return null;
  };

  makeRemoteRequest = () => {
    const url = `https://www.aukok.lt/api/userprojects?accesstoken=${this.state.userData.id}`;
    this.setState({ loading: true }, async () => {
      try {
        const res = await fetch(url);
        const response = await res.json();
        this.setState({
          data: [...response.userProjects],
          loading: false,
          refreshing: false,
        });
      } catch (error) {
        console.log(`There has been a problem with your fetch operation: ${error.message}`);
        this.setState({
          loading: false,
          refreshing: false,
        });
        throw error;
      }
    });
  };

  handleRefresh = () => {
    this.setState(
      {
        refreshing: true,
      },
      () => {
        this.makeRemoteRequest();
      },
    );
  };

  openProjectWizardModal = () => {
    let leftButtons = [];

    if (Platform.OS === 'ios') {
      leftButtons = [
        {
          id: 'close',
          title: 'Close',
          icon: images.navBar.close.dark,
          disableIconTint: true,
        },
      ];
    }
    this.props.navigator.showModal({
      screen: 'aukoklt.ProjectWizard.FirstStep',
      animationType: 'slide-up',
      passProps: { onDismissFunction: this.handleRefresh },
      navigatorButtons: {
        leftButtons,
      },
    });
  };

  renderHeader = () => (
    <UserHeader
      titleText={lang.user.title}
      navigator={this.props.navigator}
      userImage={this.state.userData.picture}
    />
  );

  renderFooter = () => {
    if (!this.state.loading) {
      return (
        <View>
          <Button
            textValue={lang.user.createProject}
            onPressAction={this.openProjectWizardModal}
            icon={'plus-circle'}
            iconColor={'#310101'}
            full
            secondary
            smallMarginTop
          />
        </View>
      );
    }

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
              <UserProjectCard
                projectInfo={item}
                navigator={this.props.navigator}
                navigateTo="aukoklt.UserProjectView"
              />
            )}
            keyExtractor={item => item.projectId}
            contentContainerStyle={globalstyle.userProjectList}
            ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}
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

UserProjectList.navigatorStyle = {
  ...navigatorStyle,
};

UserProjectList.propTypes = {
  navigator: PropTypes.object,
};

export default UserProjectList;
