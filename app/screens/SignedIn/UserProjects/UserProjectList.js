import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Platform, ActivityIndicator } from 'react-native';
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
      data: [],
      offset: 0,
      userAccessToken:
        '26BDFABF0F7A428259CF94415718787B66148156176174663C8233E0DAE82DBE3873F775F005635096A8C89DB6256A2E1F2A5B3ED0932FD6C156AFE84AFC64119AD8E851F89FD5EDCF0F133F2C2F3C854DB7FAD286B12E1CFA6A5EF8B8C47B70184553DA780F5E84030FCB1C1576711D0A76A1D45BB79A853AB5BD84A2B24481FA8E0FFD41CAAC1A8D8007031AABBD938FE0E3BA5F8BB53451AE9A632DDD18F1032E91F09276666309F9CA2F1AEA9BB8C08C1D23DA8E94E7813EFF83D59FB3B6',
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  useResponseToUpdateState(response) {
    this.setState({
      data:
        this.state.offset === 0
          ? response.userProjects
          : [...this.state.data, ...response.userProjects],
      loading: false,
    });
  }

  makeRemoteRequest = () => {
    const url = `https://www.aukok.lt/api/userprojects?accesstoken=${this.state
      .userAccessToken}&limit=10&offset=${this.state.offset}`;
    this.setState({ loading: true }, async () => {
      try {
        const res = await fetch(url);
        const response = await res.json();
        this.useResponseToUpdateState(response);
      } catch (error) {
        console.log(error);
      }
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

  renderHeader = () => <UserHeader titleText={lang.user.title} navigator={this.props.navigator} />;

  renderFooter = () => {
    if (!this.state.loading) {
      return (
        <View>
          <Button
            textValue={lang.user.createProject}
            onPressAction={this.openProjectWizardModal}
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
        <ActivityIndicator animating size="large" />
      </View>
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
      navigatorButtons: {
        leftButtons,
      },
    });
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
            keyExtractor={item => item.title}
            contentContainerStyle={globalstyle.baseHorizontalMargins}
            ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={50}
            showsVerticalScrollIndicator={false}
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
