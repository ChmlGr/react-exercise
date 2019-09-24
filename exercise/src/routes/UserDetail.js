import React, { Component } from 'react';
import User from '../components/User';
import { getUsers } from '../services/users';

export default class UserDetail extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    getUsers(20).then(users => {
      const user = users.find(user => user.login.uuid === this.props.match.params.id);
      this.setState({ user });
    }).catch(e => console.error(e))
  }

  render() {
    return <User user={this.state.user} goBack={() => this.props.history.goBack()} />;
  }
}
