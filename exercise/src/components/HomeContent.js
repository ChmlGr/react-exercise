import React, { Component } from 'react';
import Button from './Button';

export default class HomeContent extends Component {
  render() {
    return (
      <>
        <Button onClick={this.props.handleAuth}>{this.props.isLoggedin ? 'Logout' : 'Login'}</Button>
      </>
    );
  }
}
