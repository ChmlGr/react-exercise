import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../services/users';
import UserListContent from '../components/UserListContent';

export default class UserList extends Component {
  state = {
    users: [],
    error: '',
  };

  componentDidMount() {
    getUsers(20)
      .then(users => {
        this.setState({ users });
      })
      .catch(e => {
        this.setState({ error: 'Users could not be retrived at this time' });
        console.error(e);
      });
  }

  render() {
    const userlistOrError = this.state.error === '' ? <UserListContent users={this.state.users}></UserListContent> : this.state.error;
    return (
      <>
        <nav className='navbar' role='navigation' aria-label='main navigation'>
          <div className='navbar-menu'>
            <div className='navbar-start'>
              <div className='navbar-item'>
                <Link to='/home' className='button'>
                  <i className='fas fa-home'></i> Home
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {userlistOrError}
      </>
    );
  }
}
