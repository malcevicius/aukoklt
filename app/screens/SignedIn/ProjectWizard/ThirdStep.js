import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

import { Container } from '../../../components/Container';

class ThirdStep extends Component {
  static propTypes = {
    rootProjectId: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      userProjectId: '',
    };
  }

  createFundraiseProject = () => {
    console.log(
      `Title: ${this.state.projectName}  Goal: ${this.state.goalNumber}  RootProjectID: ${this.props
        .rootProjectId}`,
    );

    this.setState({ loading: true });

    fetch('https://www.aukok.lt/api/userprojects', {
      method: 'POST',
      headers: {
        charset: 'utf-8',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        projectId: this.props.rootProjectId,
        userId: '49697099f55942479f1eef2fa7e15b13',
        title: this.state.projectName,
        need_to_donate: this.state.goalNumber,
        description: 'Oh hello pretty world!', // optional
      }),
    })
      .then(response => response.json())
      .then((response) => {
        this.setState({
          userProjectId: response,
          error: response.error || null,
          loading: false,
        });
        console.log(`User project ID: ${this.state.userProjectId}`);
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  };

  render() {
    return (
      <Container>
        <Text>Great success!</Text>
        <TouchableOpacity activeOpacity={1} focusedOpacity={1}>
          <Text>Grįžti į sąrašą</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default ThirdStep;
