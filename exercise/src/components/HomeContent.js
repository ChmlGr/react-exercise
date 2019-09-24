import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default class HomeContent extends Component {
  render() {
    return (
      <>
        <Button onClick={this.props.handleAuth}>{this.props.isLoggedin ? 'Logout' : 'Login'}</Button>
        <Link to='/users' className='button' style={{ width: 100, margin: 8, padding: 8 }}>
          <i className='fas fa-users'> </i>
          <span style={{ marginLeft: '5px' }}>User list</span>
        </Link>
      </>
    );
  }
}
