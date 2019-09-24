import React, { Component } from 'react';

import TopBar from '../components/TopBar';
import HomeContent from '../components/HomeContent';

import { logout, isLoggedin } from '../services/login';
import Login from '../components/Login';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: false,
      showLogin: false,
    };
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.setState({ loggedin: isLoggedin() === 'true' });
  }

  login() {
    this.setState({ loggedin: true });
    this.setState({ showLogin: false });
  }

  logout() {
    logout()
      .then(() => this.setState({ loggedin: false }))
      .catch(e => console.error(e));
  }

  handleAuthentication = () => {
    if (this.state.loggedin) return this.logout();
    this.setState({ showLogin: !this.state.showLogin });
  };

  render() {
    return (
      <div className={`container is-fluid`}>
        <TopBar handleAuth={this.handleAuthentication} isLoggedin={this.state.loggedin} />
        <HomeContent handleAuth={this.handleAuthentication} isLoggedin={this.state.loggedin} />
        {this.state.showLogin && <Login active={this.state.showLogin} close={() => this.setState({ showLogin: false })} onLogin={this.login} />}
      </div>
    );
  }
}
