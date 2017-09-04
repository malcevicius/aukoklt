import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { Container } from '../components/Container';
import { ProjectCard } from '../components/ProjectCard';
import { ScreenTitle } from '../components/ScreenTitle';

class ProjectList extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page } = this.state;
    const url = `https://www.aukok.lt/api/projects?limit=10&page=${page}`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then((res) => {
        this.setState({
          data: page === 1 ? res.projects : [...this.state.data, ...res.results],
          error: res.error || null,
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
        page: this.state.page + 1,
      },
      () => {
        this.makeRemoteRequest();
      },
    );
  };

  renderHeader = () =>
    <ScreenTitle
      title="Projektai"
      userAvatar="https://scontent-lhr3-1.xx.fbcdn.net/v/t31.0-8/17349947_10207250909505873_4889216807293798707_o.jpg?oh=d638b37fd311d8d9f1c57276990e3491&oe=5A2846BD"
    />;

  render() {
    return (
      <Container>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) =>
            <ProjectCard
              projectTitle={item.title}
              organisationName={item.company}
              thumbnail={item.img}
              needToDonate={item.need_to_donate}
              donated={item.donated}
            />}
          keyExtractor={item => item.project_id}
          ListHeaderComponent={this.renderHeader}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={50}
        />
      </Container>
    );
  }
}

export default ProjectList;
